const TOKEN_KEY = 'tokden';

export const TokenRepository = {
    setToken: (token) => {
        localStorage.setItem(TOKEN_KEY, token);
    },
    // 중복된 토큰 키 값이 set되면 update

    getToken: () => {
        return localStorage.getItem(TOKEN_KEY);
    },
    removeToken: () => {
        localStorage.removeItem(TOKEN_KEY);
    },
};
