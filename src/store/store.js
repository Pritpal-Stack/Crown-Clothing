import { compose, createStore, applyMiddleware } from "redux";
// import { logger } from 'redux-logger'
import { RootReduces } from "./root-reducers";
import { persistReducer, persistStore } from "redux-persist"; // for retaining the cart values
import  storage  from "redux-persist/lib/storage" 
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from  './root-saga'

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

const sagaMiddleware = createSagaMiddleware();

const middleWare = [process.env.NODE_ENV && loggerMiddleware, sagaMiddleware].filter(Boolean);

const persistConfig = {
    key: "root",
    storage,
    // blacklist: ['user']
    whitelist: ['cart']
}

const persistedReducer = persistReducer(persistConfig, RootReduces)

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persister = persistStore(store)