import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDf6cdLzO7RmOE_fmCuymXLxChDLfSO9s4",
    authDomain: "imessage-clone-9801b.firebaseapp.com",
    projectId: "imessage-clone-9801b",
    storageBucket: "imessage-clone-9801b.appspot.com",
    messagingSenderId: "692699151195",
    appId: "1:692699151195:web:b6a2a39398d08adc67f87e",
    measurementId: "G-G7FGHVVM3Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;