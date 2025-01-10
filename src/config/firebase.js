import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmEB-nAfUAyzqhCgaiykImy3F9tPh1xMw",
  authDomain: "test-project-c5f2f.firebaseapp.com",
  projectId: "test-project-c5f2f",
  storageBucket: "test-project-c5f2f.appspot.com",
  messagingSenderId: "892864836287",
  appId: "1:892864836287:web:640a856f8a6beae7f34c0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const db = getFirestore(app);