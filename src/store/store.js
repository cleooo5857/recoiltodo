import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "reducer/todo";

export const store = configureStore({
   reducer: {
      todo : todoSlice
   },
})
