import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBan, faPen } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import { removetodo, updatetodo } from 'reducer/todo';
import useInput from 'hooks/InputUtils';

function TodoCard({ todo }) {
  const [state,setstate] = useState(todo.state);
  const [TodoContent, setTodoContent] = useInput(todo.content);
  const [edit,setedit] = useState(false)
  const dispatch = useDispatch();


  const onCheckedList = () => {
    // setcheck(!todo.state)
    state ? setstate(false) : setstate(true)
  }

  const onUpdateTodo = () => {
    if(TodoContent === todo.content) return setedit(false) 
    dispatch(updatetodo({
        id: todo.id,
        content: TodoContent
    }))
    setedit(false);
  }

  const onClickEditBtn = () => {
    setedit(true)
  }

  const onDeleteTodo = () => {
    const confrimCheck = window.confirm("해당 리스트를 삭제하시겠습니까?")
    if(confrimCheck){
      dispatch(removetodo({id : todo.id}))
      alert('삭제되었습니다.')
    }else{
      alert('취소되었습니다.')
    }
    
  }
  
  return (
    <S.Wrapper state={state}>
      <S.Header>
        <S.StateBox state={state}>
          <FontAwesomeIcon onClick={onCheckedList} icon={faCheck} />
        </S.StateBox>
        <S.Title state={state}>
          {todo.title}
          <div>
            <FontAwesomeIcon onClick={edit ? onUpdateTodo : onClickEditBtn} icon={faPen} />
            <FontAwesomeIcon onClick={onDeleteTodo} icon={faBan} />
          </div>
        </S.Title>
      </S.Header>
      <S.Content state={state}>
        { edit ?
          <textarea value={TodoContent} onChange={setTodoContent}></textarea> 
          :
          todo.content
        }
      </S.Content>
    </S.Wrapper>
  );
}
export default TodoCard;

const Wrapper = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid #999;
  margin: 16px 0;
  border-radius: 8px;
  background-color: ${({ state, theme }) =>
    state ? theme.palette.gray[100] : theme.palette.white};
`;

const Header = styled.div`
  border-bottom: 1px dotted #999;
  ${flexAlignCenter};
  padding: 8px 16px;
  height: 48px;
`;

const Title = styled.h1`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};

  & svg {
    cursor: pointer;
    margin-left: 16px;
    :hover {
      transform: scale(1.2);
    }
  }
`;

const StateBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  ${flexCenter};
  color: ${({ state }) => (state ? '#3CB371' : '#999')};
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
`;

const Content = styled.div`
  padding: 16px;
  text-decoration: ${({ state }) => (state ? 'line-through' : 'none')};

  & textarea {
    width: 100%;
    height: 100%;
    border: 1px dotted #999;
    outline: none;
    resize: none;
  }
`;

const S = {
  Wrapper,
  Header,
  StateBox,
  Title,
  Content,
};
