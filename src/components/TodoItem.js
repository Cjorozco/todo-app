import React from "react";
import styled from "styled-components";
import { MdDelete } from 'react-icons/md';
import { MdTask } from 'react-icons/md';

const ListItem = styled.li`
  background-color: #FAFAFA;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
`;

const TextItem = styled.p`
  margin: 24px 0 24px 24px;
  width: calc(100% - 120px);
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
  text-decoration: ${props => props.completed && "line-through"};
`;

const Icon = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  font-size: 24px;
  font-weight: bold;
`;

const IconCheck = styled(Icon)`
  position: absolute;
  left: 12px;
  color: ${props => props.completed && "#4caf50"};
`;

const IconDelete = styled(Icon)`
  position: absolute;
  top: -24px;
  right: 0;
  &:hover {
    color: red;
  }
`;

const TodoItem = (props) => {
  return(
    <ListItem key={props.id}>
      <IconCheck 
        completed={props.completed} 
        onClick={props.onComplete}
      >
        <MdTask />
      </IconCheck>
        <TextItem completed={props.completed}>{props.text}</TextItem>
      <IconDelete onClick={props.onDelete}>
        <MdDelete />
      </IconDelete>
    </ListItem>
  );
}

export { TodoItem };