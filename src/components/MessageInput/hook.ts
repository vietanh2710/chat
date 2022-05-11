import {
  useState,
  MouseEvent,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
  ChangeEvent,
  MutableRefObject,
} from "react";
import { useFormik } from "formik";
import { isEmpty, isNil } from "lodash";
import { IEmojiData } from "emoji-picker-react";
import { ImageListType } from "react-images-uploading";
import moment from "moment";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import userFireStore from "hooks/useFireStore";
import { addRecord } from "services/service";
import { COLLECTION } from "common/constant";
import { storage } from "services/firesbase";
import { File } from "types";

type InitialValues = {
  value: string;
  images: string[];
  file: File | null;
};

export type ReceivedProps = {
  channelId?: string;
  setHeightWrapper: Dispatch<SetStateAction<number | undefined>>;
};

const useMessageInput = (props: ReceivedProps) => {
  const inputFileRef: MutableRefObject<any> = useRef(null);
  const { user } = userFireStore();

  const [images, setImages] = useState<ImageListType>([]);
  const [isEmoji, setEmoji] = useState<boolean>(false);
  const [inputHeight, setInputHeight] = useState<number>();

  const onUploadImg = (imageList: ImageListType) => {
    formik.setFieldValue(
      "images",
      imageList.map((i) => i.dataURL)
    );
    setImages(imageList);
  };

  const onSubmit = async (response: InitialValues) => {
    if (
      isEmpty(response.images) &&
      isEmpty(response.value) &&
      isNil(response.file)
    )
      return;

    if (!isNil(response.file)) {
      const storageRef = ref(storage, `files/${response.file?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, response.file as any);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            if (progress === 100) {
              addRecord(COLLECTION.MESSAGES, {
                content: response.value,
                uid: user?.uid,
                channelId: props.channelId,
                createdAt: moment().unix(),
                images: response.images,
                file: {
                  name: response.file?.name,
                  type: response.file?.type,
                  url: downloadURL,
                },
              });
            }
          });
        },
        (error) => {
          console.log("error :>> ", { error });
        }
      );
    }

    if (
      (!isEmpty(response.value) || !isEmpty(response.images)) &&
      isNil(response.file)
    ) {
      addRecord(COLLECTION.MESSAGES, {
        content: response.value,
        uid: user?.uid,
        channelId: props?.channelId,
        createdAt: moment().unix(),
        images: response.images,
        file: null,
      });
    }

    formik.resetForm();
    setImages([]);
  };

  const formik = useFormik({
    initialValues: {
      value: "",
      images: [],
      file: null,
    },
    onSubmit: (values) => onSubmit(values),
  });

  const getValue = formik.getFieldProps("value").value;

  const onEmojiClick = (_event: MouseEvent, emojiObject: IEmojiData) => {
    let message = getValue;
    message += emojiObject.emoji;

    formik.setFieldValue("value", message);
  };

  const onChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;
    const getFile = fileList[0];
    const reader = new FileReader();

    reader.readAsDataURL(getFile);
    formik.setFieldValue("file", getFile);
  };

  const onUploadFile = () => {
    inputFileRef.current.click();
  };

  useEffect(() => {
    const result = document.getElementById("input");

    if (isEmpty(getValue)) {
      setInputHeight(46);
    }

    if (isNil(result) || isEmpty(getValue)) return;

    setInputHeight(result.scrollHeight);
  }, [getValue]);

  useEffect(() => {
    const result = document.getElementById("chat-wrapper");

    props.setHeightWrapper(result?.clientHeight);
  }, [getValue, images, props, formik.values, inputHeight]);

  return {
    ...props,
    formik,
    images,
    isEmoji,
    inputHeight,
    inputFileRef,
    onUploadFile,
    onChangeFile,
    setEmoji,
    onEmojiClick,
    onUploadImg,
  };
};

export type Props = ReturnType<typeof useMessageInput>;

export default useMessageInput;
