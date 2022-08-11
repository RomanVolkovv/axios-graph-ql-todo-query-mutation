import React from 'react';
import styled from './search.module.css';

const Search = (props) => {
  const { searchTodo } = props;

  return (
    <div className={styled.container}>
      <form>
        <input
          className={styled.inputSearch}
          type='search'
          onChange={searchTodo}
          placeholder='search'
        />
      </form>
    </div>
  );
};

export default Search;
