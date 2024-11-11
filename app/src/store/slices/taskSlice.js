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
      deleteTask: (state, action) => {
        const index = state.findIndex((task) => task.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1); // Rimuove la task in modo immutabile
        }
      },
}
})

export const { addTask, startTask, pauseTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer