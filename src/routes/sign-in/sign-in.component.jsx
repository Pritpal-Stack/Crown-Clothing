import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth
} from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from 'firebase/auth'
import { useEffect } from "react";

const SignIn = () => {

  useEffect(()=>{

    async function getRedirectDate(){
      const resp = await getRedirectResult(auth);
      console.log('respRedirect', resp)
    }

    getRedirectDate();

  }, [])

  const LogGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
 

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={LogGoogleUserPopup}>SignIn with Popup</button>
      <button onClick={signInWithGoogleRedirect}>SignIn with Redirect</button>
    </div>
  );
};

export default SignIn;
