import React from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button/Button';
import './Intro.scss';

export default function Intro({ onClick }) {
  return (
    <div className="intro">
      <div className="intro-wrapper">
        <span className="intro-wrapper__title">Product Experience Demo</span>
        <p className="intro-wrapper__text">
          ybot intercepts customers calling your contact center and deflects them to SMS to solve their problem with the
          same level of personalization that your agents would normally follow.
        </p>

        <Button onClick={onClick}>Start ybot experience</Button>
      </div>

      <div className="intro-wrapper">
        <span className="intro-wrapper__heading">It does this by</span>

        <div className="intro-container">
          <div className="intro-container__image">
            <img src="/images/icons/firstPage/dialpad.svg" alt="" />
          </div>
          <p className="intro-container__text intro-container__text_margin">
            Capturing a customer’s phone number and intention when they call your IVR system.
          </p>
        </div>

        <div className="intro-container">
          <div className="intro-container__image">
            <img src="/images/icons/firstPage/cloud.svg" alt="" />
          </div>
          <p className="intro-container__text intro-container__text_margin">
            Accessing your cloud ERP and CRM to pull specific details about that customer’s query in a way that relates
            specifically to them (have logos of all the compatible systems).
          </p>
        </div>

        <div className="intro-container">
          <div className="intro-container__image">
            <img src="/images/icons/firstPage/messages.svg" alt="" />
          </div>
          <p className="intro-container__text intro-container__text_margin">
            Composes a series of personalized SMS populated with object data pulled from your ERP and CRM.
          </p>
        </div>

        <p className="intro-container__text intro-container__text_full">
          ybot is designed to solve the customer’s problem in under 60 seconds (versus the industry average case
          resolution time of 40 minutes), and ultimately reducing overall call wait times and case resolution costs.
        </p>

        <p className="intro-container__text">
          For this demonstration, we’ve set up ybot to give you a first-hand self-guided experience. To start, simply
          enter your details in the form, turn your sound on, and select ‘start ybot experience’
        </p>
      </div>
    </div>
  );
}

Intro.propTypes = {
  onClick: PropTypes.func.isRequired,
};
