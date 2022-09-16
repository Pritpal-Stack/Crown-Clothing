import { compose, createStore, applyMiddleware } from "redux";
import { logger } from 'redux-logger'
import { RootReduces } from "./root-reducers";
 
const middleWare = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(RootReduces, undefined, composedEnhancers)