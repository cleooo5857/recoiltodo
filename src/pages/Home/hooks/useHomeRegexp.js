import { useEffect, useState } from 'react';

const useHomeRegexp = (email, password) => {
    const [disabled, setDisabled] = useState(true);

    /*
    조건
    1. 이메일안에 @가 들어가있고
    2. 비밀번호가 8글자이 상이면
    3. disabled 상태가 fals가 된다.
    */
    useEffect(() => {
        if (email.includes('@') && password.length >= 8) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [email, password]);

    return disabled;
};

export default useHomeRegexp;
