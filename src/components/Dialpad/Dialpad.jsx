import React from 'react';
import { PropTypes } from 'prop-types';
import './Dialpad.scss';

/* eslint-disable */

export default function Dialpad({ optionsList, onClick, onOptionClick, isOpen, chosenOption, isHovered }) {
  return (
    <div className={isOpen ? 'dialpad-mobile dialpad-mobile_open' : 'dialpad-mobile'}>
      <div onClick={onClick} className="dialpad-header">
        <div className="dialpad-header__line" />
        <div className="dialpad-header-wrapper">
          <span className="dialpad-header-wrapper__text">Show dialpad</span>
          <img
            className={
              isOpen ? 'dialpad-header-wrapper__img dialpad-header-wrapper__img_open' : 'dialpad-header-wrapper__img'
            }
            src="/images/icons/demo/arrow.svg"
            alt=""
          />
        </div>
      </div>

      <div className="dialpad">
        <div className="dialpad-container">
          {optionsList.map(({ id, list }) => (
            <div key={id} className="dialpad-wrapper">
              {list.map(({ id, option }) => (
                <div
                  key={id}
                  onClick={() => {
                    onOptionClick(option);
                  }}
                  className={
                    isHovered && isOpen && chosenOption === option
                      ? 'dialpad-wrapper__item dialpad-wrapper__item_active'
                      : 'dialpad-wrapper__item'
                  }
                >
                  {option}
                </div>
              ))}
            </div>
          ))}
        </div>

        <span className="demo-dialpad-container__description">*Standard carrier rates may apply when sending SMS</span>
      </div>
    </div>
  );
}

/* eslint-enable */

Dialpad.propTypes = {
  optionsList: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
  onOptionClick: PropTypes.func.isRequired,
  chosenOption: PropTypes.number.isRequired,
  isHovered: PropTypes.bool.isRequired,
};
