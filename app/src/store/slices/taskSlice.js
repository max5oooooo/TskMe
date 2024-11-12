import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        all: [],
        current: [],
    },
    reducers: {
        addTask: (state, action) => {
            state.all.push({
                ...action.payload,
                id: Date.now(),
                state: "pending",
            })
        },
        startTask: (state, action) => {
            const task = state.all.find(task => task.id === action.payload);
            if (task) task.state = 'started';
        },
        pauseTask: (state, action) => {
            const task = state.all.find(task => task.id === action.payload);
            if (task) task.state = 'paused';
        },
        completeTask: (state, action) => {
            const task = state.all.find(task => task.id === action.payload);
            if (task) task.state = 'completed';
        },
        deleteTask: (state, action) => {
            const index = state.all.findIndex((task) => task.id === action.payload);
            if (index !== -1) {
                state.all.splice(index, 1); // Rimuove la task in modo immutabile
            }
        },
        startCurrentTask: (state, { payload }) => {
            const index = state.current.findIndex((c) => c.id == payload.id);
            if (index == -1) {
                state.current.push(payload);
            } else {
                state.current[index] = { ...state.current[index], ...payload };
            }
        },
        updateCurrentTask: (state, { payload }) => {
            const index = state.current.findIndex((c) => c.id == payload.id);
            state.current[index] = { ...state.current[index], ...payload };
        }
    }
})

export const { addTask, startTask, pauseTask, completeTask, deleteTask, startCurrentTask, updateCurrentTask } = taskSlice.actions;
export default taskSlice.reducer