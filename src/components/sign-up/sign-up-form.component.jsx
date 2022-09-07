import { useState } from "react";

const defaultFormValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormValues);
  const { displayName, confirmPassword, email, password } = formFields;
  
  console.log('formFields', formFields)

  const handleChanges = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your email</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" name="displayName" onChange={handleChanges} value={displayName} required />

        <label>Email</label>
        <input type="email" name="email" onChange={handleChanges} value={email} required />

        <label>Password</label>
        <input type="password" name="password" onChange={handleChanges} value={password} required />

        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" onChange={handleChanges} value={confirmPassword} required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
