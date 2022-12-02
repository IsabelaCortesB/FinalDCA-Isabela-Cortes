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

  const usersRef = collection(db,"Usuarios");

  export const queryUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const q = query(usersRef, where("email", "==", email),where("password","==",password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  }

  export const addUser = async ({
    email,
    password
  }:{
    email: string;
    password: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,"Usuarios"),{
            email,
            password
        });
        return true;
    } catch (error) {
        return false;
    }
  }


  export const addPost = async ({
    name,
    username,
    location,
    caption,
    mainimg,
    profileimg,
    likes,
    time,
    comments,
    status
  }:{
    name: string;
    username: string;
    location: string;
    caption: string;
    mainimg: string
    profileimg: string;
    likes: string;
    time: string;
    comments: string;
    status: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,'posts'),{
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
    } catch (error) {
        return false;
    }
  };

  