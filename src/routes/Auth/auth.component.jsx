import { createUserDocumentFromAuth, auth } from "../../utils/firebase/firebase.utils";

import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";

import './auth.style.scss'

const Auth = () => {
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

  return (
    <div className="auth-container"> 
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Auth;
