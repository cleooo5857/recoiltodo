import { axiosInstance } from 'apis';

const path = '/todo';

export const TodoApi = {
    createTodo: (data) => {
        console.log(data);
        return axiosInstance.post(path, data);
    },
    getTodo: (todoId) => {
        return axiosInstance.get(path, { params: { id: todoId } });
    },
    getTodos: () => {
        console.log('list');
        return axiosInstance.get(path);
    },

    updateTodo: () => {},
    deleteTodo: () => {},
};
