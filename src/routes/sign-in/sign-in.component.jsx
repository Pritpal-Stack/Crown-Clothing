import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const LogGoogleUser = async() => {
    const {user} = await signInWithGooglePopup(); 
    await createUserDocumentFromAuth(user)

  }

  return (
    <div>
      <h1>SignIn Page</h1>
      <button onClick={LogGoogleUser} >SignIn</button>
    </div>
  );
};

export default SignIn;
