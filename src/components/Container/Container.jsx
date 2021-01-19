import React from 'react';
import { PropTypes } from 'prop-types';
import './Container.scss';

export default function Container({ mod, children }) {
  return <div className={`container ${mod}`}>{children}</div>;
}

Container.defaultProps = {
  mod: '',
};

Container.propTypes = {
  mod: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
