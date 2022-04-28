import {
  Dispatch,
  SetStateAction,
  useState,
  MouseEvent,
  useEffect,
} from "react";
import { useFormik } from "formik";
import { isEmpty, isNil } from "lodash";
import { IEmojiData } from "emoji-picker-react";
import { ImageListType } from "react-images-uploading";

type InitialValues = {
  value: string;
};

const useMessageInput = () => {
  const [images, setImages] = useState<ImageListType>([]);
  const [isEmoji, setEmoji] = useState<boolean>(false);
  const [inputHeight, setInputHeight] = useState<number>();

  const onChangeImg = (imageList: ImageListType) => setImages(imageList);

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

  useEffect(() => {
    const result = document.getElementById("input");

    if (isEmpty(getValue)) {
      setInputHeight(46);
    }

    if (isNil(result) || isEmpty(getValue)) return;

    setInputHeight(result.scrollHeight);
  }, [getValue]);

  return {
    formik,
    images,
    isEmoji,
    inputHeight,
    setEmoji,
    onEmojiClick,
    onChangeImg,
  };
};

export type Props = ReturnType<typeof useMessageInput>;

export default useMessageInput;
