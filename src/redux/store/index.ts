import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientReducer from "../reducers/client";
import userReducer from "../reducers/user";

const bigReducer = combineReducers({
   client: clientReducer,
   user: userReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
