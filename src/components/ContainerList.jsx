import React from 'react';
import TodoList from './TodoList';
import './styles/ItemListContainer.css';

const ContainerList = () => {
  return (
    <section className="item-list-container">
      <h2 className="item-list-container__title">Productos destacados</h2>

      <TodoList />
    </section>
  );
};

export default ContainerList;
