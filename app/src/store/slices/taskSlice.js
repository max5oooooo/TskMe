import { createSlice } from "@reduxjs/toolkit";



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
}
})

export const { addTask, startTask, pauseTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer