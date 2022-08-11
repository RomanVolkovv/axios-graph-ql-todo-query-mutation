import React from 'react';
import styled from './todoList.module.css';
import { AiTwotoneDelete } from 'react-icons/ai';

const TodoList = (props) => {
  const { todos, toggleTodoCheckbox } = props;

	
  return (
    <div className={styled.container}>
      <ul className={styled.todos_wrapper}>
        {todos.map((todo) => {
          return (
            <li className={styled.item_todo_wrapper} key={todo.id}>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => toggleTodoCheckbox(todo.id)}
              />
              <p>{todo.title}</p>
              <AiTwotoneDelete />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
