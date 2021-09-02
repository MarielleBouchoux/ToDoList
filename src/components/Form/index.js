import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

// class Form extends React.PureComponent {
//   handleOnSubmit = (event) => {
//     const { onFormSubmit } = this.props;
//     // on arrête le comportement par défaut du form
//     event.preventDefault();
//     onFormSubmit();
//   };

//   handleOnChange = (event) => {
//     const { onChangeInputValue } = this.props;
//     onChangeInputValue(event.target.value);
//   };

//   render() {
//     console.log('rendu de Form');

//     const { inputValue } = this.props;
//     return (
//       <form className="form" onSubmit={this.handleOnSubmit}>
//         <input
//           type="text"
//           className="form-item"
//           placeholder="Ajouter une tâche"
//           value={inputValue}
//           onChange={this.handleOnChange}
//         />
//       </form>
//     );
//   }
// }

function Form({ onFormSubmit, inputValue, onChangeInputValue }) {
  console.log('rendu de Form');

  const handleOnSubmit = (event) => {
    // on arrête le comportement par défaut du form
    event.preventDefault();
    onFormSubmit();
  };

  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        className="form-item"
        placeholder="Ajouter une tâche"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
}

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};

export default React.memo(Form);
