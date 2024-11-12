import { createSlice } from "@reduxjs/toolkit";

const auth = JSON.parse(localStorage.getItem("auth"));

const authSlice = createSlice({
    name: "auth",
    /*initialState: {
        token: auth?.token || null,
        user: auth?.user || null
    },*/
    initialState: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzFjN2Q5NTU3MTdkNmEyYTc1YzcyOSIsImVtYWlsIjoiYWxleGRhbnQ5MUBnbWFpbC5jb20iLCJyb2xlcyI6WyJvd25lciJdLCJpYXQiOjE3MzE0MjQ2MjB9.lfwNFgVCX_cKiPG3QrnQoRpHV8u-MRgRG2zDMOV4b68',
        user: {
            _id: '6731c7d955717d6a2a75c729',
            first_name: 'Alessandro',
            last_name: 'D\'Antoni',
            email: 'alexdant91@gmail.com',
            roles: [
                'owner'
            ],
            profile_image: null,
            createdAt: '2024-11-11T09:01:13.060Z',
            updatedAt: '2024-11-11T10:05:29.869Z',
            description: 'Test della mia descrizione nel database'
        }
    },
    reducers: {
        login: (state, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
            localStorage.setItem("auth", JSON.stringify({ ...state }))
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("auth");
        },
        updateUser: (state, { payload }) => {
            state.user = { ...state.user, ...payload };
            localStorage.setItem("auth", JSON.stringify({ ...state }))
        }
    }
});

export const { login, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;