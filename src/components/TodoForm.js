import React from 'react';
import styled from "styled-components";
import { TodoContext } from '../context/TodoContext';
import { MdNoteAdd } from 'react-icons/md';
import { ImExit } from 'react-icons/im';

const Form = styled.form`
  width: 90%;
  max-width: 300px;
  background-color: #fff;
  padding: 33px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.label`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: #1E1E1F;
  margin-bottom: 26px;
`;

const TextArea = styled.textarea`
  background-color: #F9FBFC;
  border: 2px solid #202329;
  border-radius: 2px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
  color: #1E1E1F;
  font-size: 20px;
  text-align: center;
  padding: 12px;
  height: 96px;
  width: calc(100% - 25px);

  &::placeholder {
    color: #A5A5A5;
    font-family: 'Montserrat';
    font-weight: 400;
  }
  &:focus {
    outline-color: #61DAFA;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  color: #202329;
  font-weight: 400;
  width: 120px;
  height: 48px;
  border-radius: 2px;
  border: none;
  font-family: 'Montserrat';
`;

const AddButton = styled(Button)`
  background: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
`;

const CancelButton = styled(Button)`
  background: transparent;
`;


const TodoForm = () => {
  // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState('');
  // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  
  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };

  return (
    <Form onSubmit={onSubmit}>
      <Title>Escribe tu nuevo TODO</Title>
      <TextArea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <ButtonGroup>
        <CancelButton
          type="button"
          onClick={onCancel}
        >
          <ImExit />
        </CancelButton>
        <AddButton
          type="submit"
        >
          <MdNoteAdd />
        </AddButton>
      </ButtonGroup>
    </Form>
  );
}

export { TodoForm };
