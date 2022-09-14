import { useState } from "react";
import { signInWithGooglePopup, AuthSignInUsingEmailPassword } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE} from "../button/button.component";

import "./sign-in-form.style.scss";

const defaultFormValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { email, password } = formFields;

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const Auth = async () => {
      try {
        await AuthSignInUsingEmailPassword(email, password);
        resetFormFields();
      } catch (error) {
        console.log("error", error);
      }
    };
    Auth();
  };

  const resetFormFields = () => {
    setFormFields(defaultFormValues);
  };

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already having an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={`Email`}
          type="email"
          name="email"
          onChange={handleChanges}
          value={email}
          required
        />

        <FormInput
          label={`Password`}
          type="password"
          name="password"
          onChange={handleChanges}
          value={password}
          autoComplete="on"
          required
        />

        <div className="button-form-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE.google} onClick={SignInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
