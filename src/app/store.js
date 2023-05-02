import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../containers/users/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
