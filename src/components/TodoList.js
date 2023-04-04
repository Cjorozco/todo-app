import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 0;
  padding: 0 0 56px 0;
  list-style: none;
`;

const TodoList = (props) => {
  return(
    <section>
      <List>
        {props.children}
      </List>
    </section>
  );
}

export { TodoList };