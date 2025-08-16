
import { configureStore } from "@reduxjs/toolkit";
import todoReducuer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer : todoReducuer
})