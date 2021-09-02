import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Todo({
  label,
  done,
  onClickTodo,
  id,
}) {
  const classnames = done ? 'list-item list-item--done' : 'list-item';

  const handleOnChange = () => {
    // console.log('je clique sur la checkbox');
    onClickTodo(id);
  };

  return (
    <li>
      <label className={classnames}>
        <input
          type="checkbox"
          // checked c'est du readOnly
          checked={done}
          // on vient donenr la possibilité de modifier
          onChange={handleOnChange}
        />
        {label}
      </label>
    </li>
  );
}
Todo.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onClickTodo: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default React.memo(Todo);
