import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
    apiKey: "AIzaSyAf80_rXMow1hDE9YHzpeZRm_zJ1A9FxSg",
    authDomain: "netflix-clone-4ce4e.firebaseapp.com",
    projectId: "netflix-clone-4ce4e",
    storageBucket: "netflix-clone-4ce4e.appspot.com",
    messagingSenderId: "775908042484",
    appId: "1:775908042484:web:8f3e0d6d6b3ba105c3a0a1",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logOut = () => {
    signOut(auth);
}

export {auth, db, login, signup, logOut};