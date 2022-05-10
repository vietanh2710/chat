import { useEffect, useState } from "react";
import { orderBy } from "lodash";

import { auth, db } from "services/firesbase";
import { Channels, Messages, UserUid, Users } from "types";

const userFireStore = () => {
  const [user, setUser] = useState<UserUid>();
  const [users, setUsers] = useState<Users[]>([]);
  const [channels, setChannels] = useState<Channels[]>([]);
  const [messages, setMessages] = useState<Messages[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getLocalStorage = localStorage.getItem("user");

  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const field = doc.data();
        return {
          id: doc.id,
          uid: field.uid,
          email: field.email,
          avt: field.avt,
          fullName: field.fullName,
          userName: field.userName,
          backgroundColor: field.backgroundColor,
          providerId: field.providerId,
          createdAt: field.createdAt,
        };
      });

      setUsers(data);
    });

    db.collection("channels").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const field = doc.data();
        return {
          id: doc.id,
          channelName: field.channelName,
          members: field.members,
          description: field.description,
          owner: field.owner,
          createdAt: field.createdAt,
        };
      });

      setChannels(orderBy(data, ["createdAt", "desc"]));
    });

    db.collection("messages").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const field = doc.data();
        return {
          id: doc.id,
          uid: field.uid,
          channelId: field.channelId,
          content: field.content,
          createdAt: field.createdAt,
        };
      });

      setMessages(orderBy(data, ["createdAt", "asc"]));
    });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          uid: user.uid,
        });

        return;
      }
    });
  }, [getLocalStorage]);

  return { users, user, channels, messages, loading };
};

export default userFireStore;
