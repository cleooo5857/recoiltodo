import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
   {
      id: 1,
      title: 'title1',
      content: 'content1',
      state: false,
      edit: false,
    },
    {
      id: 2,
      title: 'title2',
      content: 'content2',
      state: true,
      edit: false,
    },
    {
      id: 3,
      title: 'title3',
      content: 'content3',
      state: false,
      edit: false,
    },
    {
      id: 4,
      title: 'title4',
      content: 'content4',
      state: false,
      edit: false,
    },
    {
      id: 5,
      title: 'title5',
      content: 'content5',
      state: true,
      edit: false,
    },
  ],
};



export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      state.todo.unshift(action.payload);

    },
    removetodo: (state, action) => {
      console.log(state.todo.id);
      state.todo = state.todo.filter((item) => item.id !== action.payload.id);
    },
    updatetodo: (state, action) => {
      // const todo = state.todos.find((item) => item.id === action.payload.id);
      // todo.todo = action.payload.todo;
    },
  },
});

export const { addtodo, removetodo, updatetodo } = todoSlice.actions;
export default todoSlice.reducer