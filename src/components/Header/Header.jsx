import React from 'react';
import { PropTypes } from 'prop-types';
import './Header.scss';
import Button from '../Button/Button';

export default function Header({ isDemo, onClick, onMute }) {
  return (
    <header className={isDemo ? 'header header_demo' : 'header'}>
      <img src={isDemo ? '/images/logos/blue.svg' : '/images/logos/white.svg'} alt="" />

      {isDemo && (
        /* eslint-disable */
        <div className="header-wrapper">
          <Button mod="button_demo" onClick={onClick}>
            {window.innerWidth > 1100 ? 'Replay IVR guidance' : 'Replay'}
          </Button>
          <div onClick={onMute} className="header-wrapper-sound">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                className="header-wrapper-sound__img"
                d="M22 9.41L20.59 8L18 10.59L15.41 8L14 9.41L16.59 12L14 14.59L15.41 16L18 13.41L20.59 16L22 14.59L19.41 12L22 9.41Z"
              />
              <path className="header-wrapper-sound__img" d="M2 9V15H6L11 20V4L6 9H2Z" />
            </svg>
          </div>
        </div>

        /* eslint-enable */
      )}
    </header>
  );
}

Header.defaultProps = {
  isDemo: false,
  onClick: () => {},
  onMute: () => {},
};

Header.propTypes = {
  isDemo: PropTypes.bool,
  onClick: PropTypes.func,
  onMute: PropTypes.func,
};
