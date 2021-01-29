import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Theme from '../../components/Theme/Theme';
import Intro from '../../components/Intro/Intro';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import UserDetailsForm from '../../components/UserDetailsForm/UserDetailsForm';
import sendUserInfo from '../../actions/sendUserInfo';
import Demo from '../../components/Demo/Demo';
import Dialpad from '../../components/Dialpad/Dialpad';
import openTutorial, { muteTutorial, playTutorial, replayTutorial, startTutorial } from '../../actions/tutorial';
import Tutorial from '../../components/Tutorial/Tutorial';

function Main() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Theme theme={page === 5 ? 'theme_white' : 'theme_blue'} />
      <Container>
        <Header isDemo={page === 5} onClick={replayTutorial} onMute={muteTutorial} />
        {page === 0 && (
          <Intro
            onClick={() => {
              setPage(1);
            }}
          />
        )}

        {page === 1 && (
          <UserInfoForm
            page="01"
            text="What is your first name?"
            onClick={(value) => {
              state.info.name = value;
              setPage(2);
            }}
          />
        )}

        {page === 2 && (
          <UserInfoForm
            page="02"
            text={`Thanks for that, ${state.info.name}. What's your last name?`}
            onClick={(value) => {
              state.info.lastName = value;
              setPage(3);
            }}
          />
        )}

        {page === 3 && (
          <UserInfoForm
            page="03"
            text="What organization are you from?"
            onClick={(value) => {
              state.info.organization = value;
              sendUserInfo();
              setPage(4);
            }}
          />
        )}

        {page === 4 && (
          <UserDetailsForm
            page="04"
            text="For the full experience, enter your contact details"
            onClick={(value) => {
              state.details = value;
              sendUserInfo();
              setPage(5);
              console.log(state.details);
            }}
            countryList={[
              { id: 0, name: 'United States of America', code: '+1' },
              { id: 1, name: 'Australia', code: '+61' },
              { id: 2, name: 'Hong Kong', code: '+852' },
              { id: 3, name: 'United Kingdom', code: '+44' },
              { id: 4, name: 'Other', code: '' },
            ]}
            details={state.details}
          />
        )}

        {page === 5 && !state.tutorial.isOpen && (
          <Demo
            onClick={() => {
              // if (typeof option === 'number' && option !== 9) {
              //   state.option = option;
              // }
            }}
            onMouseMove={(option) => {
              if (typeof option === 'number' && option !== 9) {
                state.option = option;
              }
            }}
            onRestart={() => {
              state.details = { country: { name: 'United States of America', code: '+1' }, phoneNumber: '', email: '' };
              setPage(0);
            }}
            onCheckDetails={() => {
              console.log(state.details);
              setPage(4);
            }}
            optionsList={state.optionsList}
            playTutorial={() => {
              playTutorial();
              startTutorial();
            }}
            replayTutorial={replayTutorial}
            chosenOption={state.option}
            restart={startTutorial}
          >
            {
              /*eslint-disable */

              state.tutorial.tips.map(
                ({ number, text }) => state.option === number && <Tutorial key={number} number={number} text={text} />,
              )

              /* eslint-enable */
            }
            {state.option === null && <Tutorial number={1} text="Service" />}
          </Demo>
        )}

        {
          /*eslint-disable */
          state.tutorial.isOpen &&
            state.tutorial.tips.map(
              ({ number, text }) => state.option === number && <Tutorial key={number} number={number} text={text} />,
            )

          /* eslint-enable */
        }
      </Container>
      {page === 5 && (
        <Dialpad
          optionsList={state.optionsList}
          onClick={() => {
            openTutorial();
            playTutorial();
            startTutorial();
          }}
          onOptionClick={(option) => {
            if (typeof option === 'number' && option !== 9) {
              state.option = option;
            }
          }}
          isOpen={state.tutorial.isOpen}
          chosenOption={state.option}
        />
      )}
    </>
  );
}

export default view(Main);
