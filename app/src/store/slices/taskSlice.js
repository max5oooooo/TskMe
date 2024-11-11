import { createSlice } from "@reduxjs/toolkit";
import useDictionary from "../../hook/useDictionary";



const taskSlice = createSlice({
    name: "tasks",
    initialState : [],

    reducers: {
        addTask: (state, action) => {
            state.push({
                ...action.payload,
                id: Date.now(),
                state:"pending",
            })
            
    },
    startTask: (state, action) => {
        const task = state.find(task => task.id === action.payload);
        if (task) task.state = 'started';
      },
      pauseTask: (state, action) => {
        const task = state.find(task => task.id === action.payload);
        if (task) task.state = 'paused';
      },
      completeTask: (state, action) => {
        const task = state.find(task => task.id === action.payload);
        if (task) task.state = 'completed';
      },
      removeTask: (state, action) => {
        return state.filter(task => task.id === action.payload);
      },
}
})

export const { addTask, startTask, pauseTask, completeTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer