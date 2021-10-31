import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import cogoToast from "cogo-toast";

const firebaseConfig = {
  apiKey: "AIzaSyDoJU7QkTxPHTY87SifU6hOC0-xq6b9Nco",
  authDomain: "cleverus-1b8ce.firebaseapp.com",
  projectId: "cleverus-1b8ce",
  storageBucket: "cleverus-1b8ce.appspot.com",
  messagingSenderId: "758302251678",
  appId: "1:758302251678:web:6fba78b8ac1ef9f7dd398f",
  measurementId: "G-LMBWMBHYTS",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

console.log("google auth provider", googleProvider);

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        createdAt: Date.now(),
      });
    }
  } catch (err) {
    console.error("sign in with google", err);

    cogoToast.error(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    cogoToast.error(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      createdAt: Date.now(),
    });
  } catch (err) {
    console.error(err);
    cogoToast.error(err.message);
  }
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    cogoToast.success("Password reset email sent");
  } catch (err) {
    console.error(err);
    cogoToast.error(err.message);
  }
};

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
