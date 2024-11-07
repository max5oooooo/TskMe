import { createSlice } from "@reduxjs/toolkit";

const auth = JSON.parse(localStorage.getItem("auth"));

const userSlice = createSlice({
    name: "user",
    initialState: {
        profileImage: "",
        firstName: "",
        lastName: "",
        email: "",
        telefono: "",
        roles: "",
        birthday: ""
    },
    reducers: {
     updateProfileImage(state, {payload}) {
        state.profileImage = payload;
     }, 
     updateFirstName(state, {payload} ) {
        state.firstName = payload;
     },
    
     updateFirstName(state, {payload} ) {
        state.firstName = payload;
     },
     updateLastName(state, {payload} ) {
        state.lastName = payload;
     },
     updateEmail(state, {payload} ) {
        state.email = payload;
     },
     updateTelefono(state, {payload} ) {
        state.telefono = payload;
     },
     updateRoles(state, {payload} ) {
        state.roles = payload;
     },
     updateBirthday(state, {payload} ) {
        state.birthday = payload;
     }
    }
});

export const { updateProfileImage} = userSlice.actions;
export const { updateFirstName } = userSlice.actions;
export const { updateLastName } = userSlice.actions;
export const { updateEmail } = userSlice.actions;
export const { updateTelefono } = userSlice.actions;
export const { updateRoles} = userSlice.actions;
export const { updateBirthday} = userSlice.actions;

export default userSlice.reducer;