import React, { useContext } from "react";
import { CreateTodoButtom } from "./components/CreateTodoButton.js";
import { Modal } from './components/Modal.js';
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoForm } from "./components/TodoForm.js";
import { TodoItem } from "./components/TodoItem.js";
import { TodoList } from "./components/TodoList.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoContext } from './context/TodoContext.js';
import { TodoError } from './components/TodoError';
import { TodoLoading } from './components/TodoLoading';
import { EmptyTodo } from './components/EmptyTodo';

const App = () => {
  // Desesctructuramos los valores de nuestro contexto
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError />}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodo />}
        
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButtom setOpenModal={setOpenModal} />
    </>
  );
}

export default App;

