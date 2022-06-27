import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  global: globalSlice,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
