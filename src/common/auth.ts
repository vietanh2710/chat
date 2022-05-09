import userFireStore from "hooks/useFireStore";
import { auth } from "services/firesbase";

export const setAuthLocalStorage = () => {
  return auth.currentUser
    ?.getIdToken()
    .then((res) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          accessToken: res,
          user: true,
          uid: auth.currentUser?.uid,
        })
      );
    })
    .catch((error) => {
      console.log("error :>> ", { error });
    });
};

export const signup = (email: string, password: string) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signin = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password);

export const getProfile = (uid: string) => {
  const { users } = userFireStore();

  return users.find((item) => item.uid === uid);
};
