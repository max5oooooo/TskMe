import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import taskSlice from "./slices/taskSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        tasks: taskSlice
    }
});