import React from 'react';
import { PropTypes } from 'prop-types';
import './Button.scss';

export default function Button({ mod, children, onClick }) {
  return (
    <button type="button" className={`button ${mod}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  mod: 'button_default',
};

Button.propTypes = {
  mod: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired,
};
