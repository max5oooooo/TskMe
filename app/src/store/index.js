import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userSlice from "./slices/userSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userSlice
    }
});