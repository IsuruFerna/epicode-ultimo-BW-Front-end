import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientReducer from "../reducers/client";

const bigReducer = combineReducers({
   client: clientReducer,
});

const store = configureStore({
   reducer: bigReducer,
});

export default store;
