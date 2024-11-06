import { createSlice } from "@reduxjs/toolkit";



const taskSlice = createSlice({
    name: "tasks",
    initialState : [{
        toDo: "",
        title: "",
        message: "",
        priority: "",
        time: "",
        date: ""//new Date(),
    }],

    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
    },
}
})

export const { addTask  } = taskSlice.actions;
export default taskSlice.reducer