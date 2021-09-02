import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

import './style.scss';

function List({ tasks, onChangeTaskDone }) {
  const todoList = tasks.map((task) => (
    <Todo
      key={task.id}
      // taskName={task.label}
      // completion={task.done}
      // plutôt que de lister toutes les props et d'associer les
        // propriétés de l'obejt task à ces props.
        // on peut utiliser le spread operator et venir déverser les
        // propriétés de task dans celle de l'objet de props
      {...task}
      onClickTodo={onChangeTaskDone}
    />

  ));

  return (
    <ul className="list">
      {todoList}
    </ul>
  );
}
List.propTypes = {
  // je sais pas ce qu'il y a dans le tableau
  // tasks: PropTypes.array.isRequired,
  // tableau d'objets dont on ne connait pas la forme
  // tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    // on fera la validation dans todo (puisqu'on a fait un spread)
    // label: PropTypes.string.isRequired,
    // done: PropTypes.bool.isRequired,
  })).isRequired,
  onChangeTaskDone: PropTypes.func.isRequired,
};
export default React.memo(List);
