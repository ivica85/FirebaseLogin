import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './Utils';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**
 * ? Google login signInWithPopup 
 */

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signWithGoogle = () => auth.signInWithPopup(GoogleProvider);

/**
 * ! Saving data from users in firebase after Auth
 */

export const handleUserProvider = async (authUser, additionData) => {
  const { uid } = authUser;

  const userDoc = firestore.doc(`users/${uid}`);

  const snapShot = await userDoc.get();

  if (!snapShot.exists) {
    const { displayName, email } = authUser;
    const timeStamp = new Date();

    try {
      await userDoc.set({
        displayName,
        email,
        createDate: timeStamp,
        ...additionData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDoc;
};
