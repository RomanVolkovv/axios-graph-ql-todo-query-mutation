import React from 'react';
import styled from './newTaskField.module.css';

const NewTaskField = (props) => {
  const { trackToNewTodoField, addTodo } = props;
  return (
    <div className={styled.container}>
      <form onSubmit={addTodo}>
        <input
          className={styled.inputTodo}
          placeholder='Your todo'
          type='search'
          onChange={trackToNewTodoField}
        />
        <button className={styled.btn} type='submit'>
          ADD TODO
        </button>
      </form>
    </div>
  );
};

export default NewTaskField;
