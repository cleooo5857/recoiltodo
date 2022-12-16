import Button from 'components/Button/Button';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';
import useInput from 'hooks/InputUtils'

function SignUpForm({ form, setform}) {

  const [email,setemail] = useInput('')
  const [password,setpassword] = useInput('')
  const [passowrdcek,setpasswordcek] = useInput('')
  const [disabled, setdisabled] = useState(true)
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const [warningmsg , setwarningmsg] = useState(false)
  
  const onLoginSubmit = (e) => {
    e.preventDefault();
    if(password.length >= 1 && password.length > 9 ){
      console.log('비밀번호 맞는 양식입니다..')
    }else{
      return console.log('8글자 이상 입력해야합니다.')
    }
    if(password !== passowrdcek) {
      return console.log('일치하지않는다');
    } setwarningmsg(true)
    alert('회원가입성공')
    setform('login')
    
  };


  useEffect(() => {
    const sign = emailRegEx.test(email) && passowrdcek.length >= 8 && password === passowrdcek
    sign ? setdisabled(false) : setdisabled(true)
    if(email.length >= 1 ){
      setwarningmsg(true)
      if(emailRegEx.test(email)){
        setwarningmsg(false)
      }
    }
  },[email,passowrdcek,password])
  

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input value={email} onChange={setemail} placeholder="e-mail" />
        <span>이메일</span>
      </S.InputBox>
          <S.Warningmsg warningmsg={warningmsg}><p>이메일 형식이 맞지 않습니다.</p></S.Warningmsg>
      <S.InputBox>
        <input value={password} onChange={setpassword} placeholder="password" />
        <span>암호</span>
      </S.InputBox>
      <S.InputBox>
        <input value={passowrdcek} onChange={setpasswordcek} placeholder="password confirm" />
        <span>암호 확인</span>
      </S.InputBox>
      {
        !disabled ? 
        <Button disabled={disabled} variant="primary" size="full">회원가입</Button>
        :
        <Button disabled={disabled} variant="primary-disabled" size="full">회원가입</Button> 
      }
      
        
      
    </S.Form>
  );
}
export default SignUpForm;

const Form = styled.form`
  width: 360px;
  background-color: ${({ theme }) => theme.palette.white};
  ${flexCenter};
  flex-direction: column;
  padding: 32px 0 0 0;
`;

const InputBox = styled.div`
  width: 80%;
  height: 48px;
  ${flexCenter};
  position: relative;
  margin-bottom: 16px;

  & input {
    width: 100%;
    border: 1px solid #999;
    border-radius: 5px;
    height: 100%;
    text-align: center;
  }

  &  span {
    position: absolute;
    left: 15px;
    top: -5px;
    font-size: ${({ theme }) => theme.fontSize.small};
    background-color: ${({ theme }) => theme.palette.white};
    z-index: 1;
    padding: 0 5px;
  }

   
`;

const Warningmsg = styled.div`
  width : 80%;
  margin-top: -10px;
  padding-bottom: 15px;
  display: ${({ warningmsg }) => (warningmsg ? 'block' : 'none')};
  & p {
    font-size: 12px;
    color : red;
    
  }
`

const S = {
  Form,
  InputBox,
  Warningmsg,
};
