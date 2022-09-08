import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    const getRedirectDate = async () => {
      try {
        const resp = await getRedirectResult(auth);
        if (resp && resp.user) {
          const { user } = resp;
          await createUserDocumentFromAuth(user);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getRedirectDate();
  }, []);

  const LogGoogleUserPopup = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={LogGoogleUserPopup}>SignIn with Popup</button>
      <button onClick={signInWithGoogleRedirect}>SignIn with Redirect</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
