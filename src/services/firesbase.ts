import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFOJF-6PI3A--9v6nKJtPV0icq1gz33Fc",
  authDomain: "chat-app-348512.firebaseapp.com",
  projectId: "chat-app-348512",
  storageBucket: "chat-app-348512.appspot.com",
  messagingSenderId: "591019443057",
  appId: "1:591019443057:web:289f63113c452e1c996cd0",
  measurementId: "G-EZ4JEL23WG",
};

// apiKey: process.env.FIRE_BASE_API_KEY,
// authDomain: process.env.FIRE_BASE_CHAT_DOMAIN,
// projectId: process.env.FIRE_BASE_PROJECT_ID,
// storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
// messagingSenderId: process.env.FIRE_BASE_MESSAGING_SENDER_ID,
// appId: process.env.FIRE_BASE_APP_ID,
// measurementId: process.env.FIRE_BASE_MEASUREMENT_ID,

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// auth.useEmulator("http://localhost:9099");
// if (window.localStorage.hostname === "localhost") {
//   db.useEmulator("localhost", 8080);
// }

export { db, auth };
