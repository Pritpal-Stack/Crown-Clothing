import { compose, createStore, applyMiddleware } from "redux";
// import { logger } from 'redux-logger'
import { RootReduces } from "./root-reducers";
import { persistReducer, persistStore } from "redux-persist"; // for retaining the cart values
import  storage  from "redux-persist/lib/storage"

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log(`type: `, action.type);
    console.log(`payload: `, action.payload);
    console.log(`currentState: `, store.getState());

    next(action);

    console.log(`next state: `, store.getState())

}

const middleWare = [process.env.NODE_ENV && loggerMiddleware].filter(Boolean);

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, RootReduces)

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persister = persistStore(store)