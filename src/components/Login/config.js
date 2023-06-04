import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCN7pIdMZN6Y07VKULMJpotFCiRZsc8ORw",
  authDomain: "login-private-route-redirect.firebaseapp.com",
  projectId: "login-private-route-redirect",
  storageBucket: "login-private-route-redirect.appspot.com",
  messagingSenderId: "758748708649",
  appId: "1:758748708649:web:19225f8fa0d4acaa668138"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };