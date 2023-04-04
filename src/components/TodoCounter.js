import React, { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from '../context/TodoContext';

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;
`;

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  return(
    <Title>Has complentado {completedTodos} de {totalTodos} ToDos</Title>
  )
}

export { TodoCounter };

