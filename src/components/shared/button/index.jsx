import React from 'react';
import { bool, string, func } from 'prop-types';

function Button({ dataTestid, name, type, disabled, onClick }) {
  return (
    <button
      data-testid={ dataTestid }
      disabled={ disabled }
      type={ type === 'submit' ? 'submit' : 'button' }
      onClick={ onClick }
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  dataTestid: string,
  name: string.isRequired,
  type: string.isRequired,
  disabled: bool,
  onClick: func,
};

Button.defaultProps = {
  dataTestid: '',
  disabled: false,
  onClick: () => {},
};

export default Button;
