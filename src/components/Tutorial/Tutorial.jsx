import React from 'react';
import { PropTypes } from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import './Tutorial.scss';

export default function Tutorial({ number, text }) {
  return (
    /* eslint-disable */
    <Spring from={{ x: 100, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
      {({ x, opacity }) => (
        <div style={{ transform: `translateX(${x}px)`, opacity }} className="tutorial-description">
          <span className="tutorial-description__option">Press {number}</span>
          <span className="tutorial-description__text">to experience {text} organization demonstration</span>
        </div>
      )}
    </Spring>
    /* eslint-enable */
  );
}

Tutorial.defaultProps = {
  number: 1,
  text: 'Service',
};

Tutorial.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};
