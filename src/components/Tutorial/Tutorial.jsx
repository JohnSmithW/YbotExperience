import React from 'react';
import { PropTypes } from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import './Tutorial.scss';

export default function Tutorial({ number, text, mod }) {
  return (
    /* eslint-disable */
    <Spring from={{ x: 100, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
      {({ x, opacity }) => (
        <div style={{ transform: `translateX(${x}px)`, opacity }} className={`tutorial-description ${mod}`}>
          <span className="tutorial-description__option">Press {number}</span>
          <span className="tutorial-description__text">
            {number !== 0
              ? `to experience ${text} organization demonstration`
              : 'to discover if ybot is suitable for your organization'}
          </span>
        </div>
      )}
    </Spring>
    /* eslint-enable */
  );
}

Tutorial.defaultProps = {
  number: 1,
  text: 'Service',
  mod: '',
};

Tutorial.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  mod: PropTypes.string,
};
