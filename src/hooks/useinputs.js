import { useState } from 'react';

const useInputs = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    // 체크 박스랑 그냥 일반 input를 구분하여 value를 가지고오는 것
    const getValue = (event) => {
        if (event.target.type === 'checkbox') {
            return event.target.checked;
        }
        return event.target.value;
    };

    const handleChange = (event) => {
        console.log(event);
        // clickEvent, target = <input/> name
        setValues((prev) => ({
            ...prev,
            [event.target.name]: getValue(event),
            // email : 안녕하세요
        }));
    };

    return [values, handleChange, setValues];
};
export default useInputs;

/* 
useInputs({
    email:
    paswword:
})

<input onChange={handleChange} name="email"/> // 안녕하세요

const obj = {
    email: "",
    paswword: "",
};

obj[e.taget.name] = ""
obj[e.taget.name] = "안녕하세요"
*/
