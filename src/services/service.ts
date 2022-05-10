import { db } from "./firesbase";

export const addRecord = (collection: string, data: any) => {
  const query = db.collection(collection);

  query.add({
    ...data,
  });
};

export const updateRecord = (
  collection: string,
  userUid: string,
  data: any
) => {
  const query = db.collection(collection);

  query.doc(userUid).update({
    ...data,
  });
};
