import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
 

export const RootReduces = combineReducers({
    user: userReducer
})