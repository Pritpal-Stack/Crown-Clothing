import { useState } from "react";
import { AuthUsingEmailPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component"; 

import "./sign-up-form.style.scss";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { displayName, confirmPassword, email, password } = formFields;
 

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`password didn't matched`);
    }
    const Auth = async () => {
      try {
        const { user } = await AuthUsingEmailPassword(email, password); 
        const savedUser = await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
        console.log("savedUser", savedUser);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          alert(`User already in signUp`);
        }
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
    <div className="sign-up-container">
      <h2>Don't have a account</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={`Display Name`}
          type="text"
          name="displayName"
          onChange={handleChanges}
          value={displayName}
          required
        />

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

        <FormInput
          label={`Confirm Password`}
          type="password"
          name="confirmPassword"
          onChange={handleChanges}
          autoComplete="on"
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
