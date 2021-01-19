import React from 'react';
import { PropTypes } from 'prop-types';
import './Theme.scss';

export default function Theme({ theme }) {
  return <div className={`theme ${theme}`} />;
}

Theme.defaultProps = {
  theme: 'theme_blue',
};

Theme.propTypes = {
  theme: PropTypes.string,
};
