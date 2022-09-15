import { useReducer } from "react";
import { createContext,  useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {},
});



export const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

export const userReducer = (state, action )=>{
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        ...state, currentUser: payload
      } 
    default:
      throw Error(`Unhandled type ${type} is useReducer`); 
  }

}


const INITIAL_STATE = {
  currentUser: null
}



export const UserProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);


  // const [currentUser, setCurrentUser] = useState(null);

  const [ {currentUser}, dispatch ] = useReducer(userReducer,INITIAL_STATE)

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPE.SET_CURRENT_USER, payload: user })
  }
  
  const value = { currentUser, setCurrentUser };


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
