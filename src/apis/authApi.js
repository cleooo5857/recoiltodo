import { axiosInstance } from 'apis';

const path = '/user';

export const AuthApi = {
    login: ({ email, password }) => {
        return axiosInstance.post(path + '/login', { email, password });
    },
    signup: ({ email, password }) => {
        return axiosInstance.post(path + '/sign', { email, password });
    },
};
