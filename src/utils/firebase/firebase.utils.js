import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore"

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('Done');

}

export const getCategoryAndDocuments = async (string) => {
    const collectionRef = collection(db, string);
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    return querySnapShot.docs.map(querySnapShot => querySnapShot.data());
    
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {

    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            });
        } catch (error) {
            console.log('error Creating User', error)
        }

    }

    return userDocRef;

}

export const AuthUsingEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const AuthSignInUsingEmailPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

export const SignOutUser = async () => {
    return await signOut(auth);
}
export const onAuthStateChangedListener = (callback) => {
    if (!callback) return;
    return onAuthStateChanged(auth, callback)
}