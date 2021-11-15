import { initializeApp } from "firebase/app";
import firebaseConfig from "./firabase.config";

const authInitialization = () => {
    initializeApp(firebaseConfig);
}
export default authInitialization;