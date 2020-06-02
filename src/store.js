import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./features/auth/authSlice";
// import creditReducer from "./features/credit/creditSlice";
// import userSlice from "./features/user/userSlice";
// import storeReducer from "./features/stores/storesSlice";
// import onboardingReducer from "./features/onboarding/onboardingSlice";

const persistConfig = {
  key: process.env.REACT_APP_STORE_KEY || "dev2",
  storage,
  blacklist: ["devices", "credit", "stores"],
};

const rootReducer = combineReducers({ auth: authReducer });

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

const persistor = persistStore(store);

export { store, persistor };
