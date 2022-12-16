import styled from 'styled-components';
import { Button } from 'components/Button/Style';
import { flexAlignCenter, flexCenter } from 'styles/common';
import TodoFormModal from './compoents/Modal/Form/Form';
import TodoList from './compoents/List/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo } from 'reducer/todo';
import { useState } from 'react';


function TodoPage() {

  // const onAddTodo = new Promise((resolve) => 
  // setTimeout(() => 
  // resolve(), 1000));
  // console.log(onAddTodo); 
  const [isOpenSignUpModal, setIsOpenSigupModal] = useState(false);
  const {todo} = useSelector((state) => state.todo)
  const dispatch = useDispatch();

  const onOpenSignUpModal = () => {
    setIsOpenSigupModal(false);
  };

  const onCloseSignUpModal = () => {
      setIsOpenSigupModal(true);
  };

  const onAddTodo = (title, content) =>
    new Promise((reject, resolve) => {
        if (!title || !content) {
          return resolve();
        }
      setTimeout(() => {
        const newTodo = {
          id: Object.keys(todo).length + 1,
          title,
          content,
          state: false,
        };
        reject(newTodo);
      }, 1000);
    }).then((res) => {
      // setTodoList([...todoList, res]);
      dispatch(addtodo({
          id: res.id,
          title:res.title,
          content: res.content,
          state: res.state
      }))
      onCloseSignUpModal();
    });

  return (
    <>
     {!isOpenSignUpModal && <TodoFormModal onAddTodo={onAddTodo} onCloseSignUpModal={onCloseSignUpModal} />}
      <S.Wrapper>
        <S.Container>
          <S.Title>List</S.Title>
          <S.Content>
            {/* List 페이지 */}
            <TodoList />
          </S.Content>
          <S.ButtonBox>
            {/* 버튼 */}
            <Button onClick={onOpenSignUpModal} variant="primary" size="full">
              추가
            </Button>
          </S.ButtonBox>
        </S.Container>
        <ToastContainer autoClose={2000} theme="colored" />
      </S.Wrapper>
    </>
  );
}
export default TodoPage;

const Wrapper = styled.div`
  height: calc(100vh - 60px);
  padding-bottom: 60px;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Title = styled.h1`
  background-color: ${({ theme }) => theme.palette.primary[300]};
  color: ${({ theme }) => theme.palette.fontColor};
  padding-left: 32px;
  height: 32px;
  ${flexAlignCenter};
`;

const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const S = {
  Wrapper,
  Container,
  Title,
  ButtonBox,
  Content,
};
