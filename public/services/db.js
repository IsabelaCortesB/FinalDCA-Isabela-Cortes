var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getFirestore, collection, query, where, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDo1OLK-0xr9lrG8w9IesACTeVYASuJP4A",
    authDomain: "final-ac261.firebaseapp.com",
    projectId: "final-ac261",
    storageBucket: "final-ac261.appspot.com",
    messagingSenderId: "675681675892",
    appId: "1:675681675892:web:bf189afca9b021a5357f21"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "Usuarios");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "Usuarios"), {
            email,
            password
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
export const addPost = ({ name, username, location, caption, mainimg, profileimg, likes, time, comments, status }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, 'posts'), {
            username,
            location,
            caption,
            mainimg,
            profileimg,
            likes,
            time,
            comments,
            status
        });
        return true;
    }
    catch (error) {
        return false;
    }
});
