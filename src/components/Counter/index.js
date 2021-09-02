import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Counter({ taskQty }) {
  let message = 'Aucune tâche en cours';

  if (taskQty === 1) {
    message = '1 tâche en cours';
  }
  else if (taskQty > 1) {
    message = `${taskQty} tâches en cours`;
  }

  return (
    <p className="counter">{message} </p>
  );
}

Counter.propTypes = {
  taskQty: PropTypes.number.isRequired,
};

export default React.memo(Counter);
