import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from '../context/TodoContext';

const Button = styled.button`
  background-color: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  font-weight: bold;
  color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  z-index: 1;

  transform: ${props => props.openModal && "rotate(224deg)"};
  transition: .3s ease;

  &:hover {
    transform: rotate(224deg);
  }
`;

const CreateTodoButtom = () => {
  const {
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  };

  return(
    <Button
      openModal={openModal}
      onClick={onClickButton}
    >
      +
    </Button>
  );
}

export { CreateTodoButtom };
