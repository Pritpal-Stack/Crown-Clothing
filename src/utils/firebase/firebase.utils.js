import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArMDY9DtLMubRxTMqUo5jQV_E_Uf8Vcpo",
    authDomain: "react-app-a9be1.firebaseapp.com",
    projectId: "react-app-a9be1",
    storageBucket: "react-app-a9be1.appspot.com",
    messagingSenderId: "1011453276319",
    appId: "1:1011453276319:web:4cd32c4349eab9a8f432aa"
};

// Initialize Firebase
/*const FirebaseApp  =*/ initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth();
export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>  signInWithRedirect(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            });
        } catch (error) {
            console.log('error setDoc' , error) 
        }

    }else{
        console.log('exist');
    }

}