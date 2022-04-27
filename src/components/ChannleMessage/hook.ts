import {
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
  useEffect,
  useMemo,
} from "react";
import { IEmojiData } from "emoji-picker-react";
import { useFormik } from "formik";
import { ImageListType } from "react-images-uploading";
import { isEmpty, isNil } from "lodash";

export type ReceivedProps = {
  showTabInfor: boolean;
  createChannel: boolean;
  setShowTabInfor: Dispatch<SetStateAction<boolean>>;
  setCreateChannel: Dispatch<SetStateAction<boolean>>;
};

type CurrentMessage = {
  open: boolean;
  index: number | null;
};

type InitialValues = {
  value: string;
};

const useChannelMessage = (props: ReceivedProps) => {
  const [currentMessage, setCurrentMessage] = useState<CurrentMessage>({
    open: false,
    index: null,
  });
  const [isEmoji, setEmoji] = useState<boolean>(false);
  const [images, setImages] = useState<ImageListType>([]);
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

  const onEmojiClick = (event: MouseEvent, emojiObject: IEmojiData) => {
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
    ...props,
    formik,
    images,
    inputHeight,
    currentMessage,
    isEmoji,
    onEmojiClick,
    onChangeImg,
    setEmoji,
    setCurrentMessage,
  };
};

export type Props = ReturnType<typeof useChannelMessage>;

export default useChannelMessage;
