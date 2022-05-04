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

type InitialValues = {
  value: string;
};

export type ReceivedProps = {
  setHeightWrapper: Dispatch<SetStateAction<number | undefined>>;
};

const useMessageInput = (props: ReceivedProps) => {
  const [images, setImages] = useState<ImageListType>([]);
  const [isEmoji, setEmoji] = useState<boolean>(false);
  const [inputHeight, setInputHeight] = useState<number>();

  const onUploadImg = (imageList: ImageListType) => setImages(imageList);

  const onSubmit = (params: InitialValues) => {
    formik.resetForm();
    setImages([]);
  };

  const formik = useFormik({
    initialValues: {
      value: "",
    },
    onSubmit: (values) => onSubmit(values),
  });

  const getValue = formik.getFieldProps("value").value;

  const onEmojiClick = (_event: MouseEvent, emojiObject: IEmojiData) => {
    let message = getValue;
    message += emojiObject.emoji;

    formik.setFieldValue("value", message);
  };

  const inputFileRef: MutableRefObject<any> = useRef(null);

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (!fileList) return;

    Array.from(fileList).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => console.log(reader);
      reader.readAsDataURL(file);
    });
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
  }, [getValue, images, props, inputHeight]);

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
