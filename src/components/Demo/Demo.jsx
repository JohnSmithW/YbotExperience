import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import './Demo.scss';
import Button from '../Button/Button';

export default function Demo({
  onClick,
  onMouseMove,
  onMouseOut,
  optionsList,
  onRestart,
  onCheckDetails,
  playTutorial,
  replayTutorial,
  children,
  chosenOption,
  restart,
  isHovered,
}) {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    playTutorial();
  }, []);

  return (
    /* eslint-disable */
    <Spring from={{ x: 100, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
      {({ x, opacity }) => (
        <div style={{ transform: `translateX(${x}px)`, opacity }} className="demo">
          <div className="demo-wrapper">
            <div className="demo-wrapper__title">
              Great! <img src="/images/icons/demo/party.png" alt="" className="demo-wrapper__img" />
            </div>
            <p className="demo-wrapper__text">
              If your sound is on, you’ll hear our IVR system speak to you. You can{' '}
              <a onClick={replayTutorial} href="#1">
                replay the IVR guidance here
              </a>
              . Problems with audio? See your{' '}
              <a onClick={restart} href="#2">
                dialpad demo options here.
              </a>
            </p>

            <p className="demo-wrapper__text">
              When ybot is deployed at your organization, it will interact with your cloud ERP and CRM systems, so that
              important personalization objects like name, transactions, reference numbers, addresses, order status and
              other relevant data fields are pulled and pre-populated. For the purposes of this demo, we’re going to use
              the details you provided in the previous form.
            </p>

            <p className="demo-wrapper__text">
              Select the ybot journey you’d like to experience from the dialpad, and you’ll receive the corresponding
              SMS journey to your cell phone number.
            </p>
            <Button onClick={onRestart} mod="button_restart">
              Start over
              <svg
                className="form__img_demo"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="button__img_demo"
                  d="M19 8L15 12H18C18 15.31 15.31 18 12 18C10.99 18 10.03 17.75 9.2 17.3L7.74 18.76C8.97 19.54 10.43 20 12 20C16.42 20 20 16.42 20 12H23L19 8ZM6 12C6 8.69 8.69 6 12 6C13.01 6 13.97 6.25 14.8 6.7L16.26 5.24C15.03 4.46 13.57 4 12 4C7.58 4 4 7.58 4 12H1L5 16L9 12H6Z"
                />
              </svg>
            </Button>

            <p className="demo-wrapper__text">
              Didn't get a message?{' '}
              <a
                href="#3"
                onClick={() => {
                  onCheckDetails();
                }}
              >
                {' '}
                Check your details here
              </a>
            </p>
          </div>

          <div className="demo-wrapper demo-wrapper_hidden">
            <div className="demo-container">
              {children}

              <div className="demo-dialpad">
                <div className="demo-dialpad-container">
                  {optionsList.map(({ id, list }) => (
                    <div key={id} className="demo-dialpad-wrapper">
                      {list.map(({ id, option }) => (
                        <div
                          key={id}
                          onClick={() => {
                            onClick(option);
                          }}
                          onMouseMove={() => {
                            onMouseMove(option);
                          }}
                          onMouseOut={() => {
                            onMouseOut();
                          }}
                          className={
                            isHovered && chosenOption === option && typeof option === 'number'
                              ? 'demo-dialpad-wrapper__item demo-dialpad-wrapper__item_selected demo-dialpad-wrapper__item_active'
                              : 'demo-dialpad-wrapper__item'
                          }
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  ))}
                  <span className="demo-dialpad-container__description">
                    *Standard carrier rates may apply when sending SMS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}
/* eslint-enable */

Demo.defaultProps = {
  chosenOption: null,
};

Demo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
  onCheckDetails: PropTypes.func.isRequired,

  optionsList: PropTypes.instanceOf(Array).isRequired,
  playTutorial: PropTypes.func.isRequired,
  replayTutorial: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired,

  children: PropTypes.instanceOf(Array).isRequired,

  chosenOption: PropTypes.number,
  isHovered: PropTypes.bool.isRequired,
};
