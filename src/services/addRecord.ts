import { Messages, Users, Channels } from "types";
import { db } from "./firesbase";

export const addRecord = (collection: string, data: any) => {
  const query = db.collection(collection);

  query.add({
    ...data,
  });
};
