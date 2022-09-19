import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const RootReduces = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
})