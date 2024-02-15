
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAjNqlTwoCg6h2opqrdfdFTGii7MARqo3c",
  authDomain: "chat-app-2d48c.firebaseapp.com",
  projectId: "chat-app-2d48c",
  storageBucket: "chat-app-2d48c.appspot.com",
  messagingSenderId: "1012775944277",
  appId: "1:1012775944277:web:38de7f407b06334cf654dc"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider= new GoogleAuthProvider()
export {auth,provider}