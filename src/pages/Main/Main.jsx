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
import openTutorial, {
  muteTutorial,
  playTutorial,
  repeatTutorial,
  replayTutorial,
  // startTutorial,
} from '../../actions/tutorial';
import Tutorial from '../../components/Tutorial/Tutorial';
import startSMS from '../../actions/startSMS';
import PopUp from '../../components/PopUp/PopUp';
import closePopUp from '../../actions/popUp';

function Main() {
  const [page, setPage] = useState(5);

  return (
    <>
      <Theme theme={page === 5 ? 'theme_white' : 'theme_blue'} />

      {state.popUp.isOpen && (
        <PopUp isOpen={state.popUp.isOpen} text={state.popUp.text} type={state.popUp.type} handleClose={closePopUp} />
      )}
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
              state.countryList.selected = value.country;
              sendUserInfo();
              setPage(5);
            }}
            countryList={state.countryList}
            details={state.details}
            isEdit={state.isEdit}
          />
        )}

        {page === 5 && !state.tutorial.isOpen && (
          <Demo
            onClick={(option) => {
              if (typeof option === 'number' && option !== 9) {
                console.log(option);
                startSMS(option);
              }
            }}
            onMouseMove={(option) => {
              state.isHovered = true;
              if (typeof option === 'number' && option !== 9) {
                state.option = option;
              }
            }}
            onMouseOut={() => {
              state.isHovered = false;
            }}
            onRestart={() => {
              setPage(0);
            }}
            onCheckDetails={() => {
              state.isEdit = true;
              setPage(4);
            }}
            optionsList={state.optionsList}
            playTutorial={() => {
              playTutorial();
              repeatTutorial();
            }}
            replayTutorial={replayTutorial}
            chosenOption={state.option}
            restart={repeatTutorial}
            isHovered={state.isHovered}
          >
            {
              /*eslint-disable */
              state.isHovered &&
                state.tutorial.tips.map(
                  ({ number, text }) =>
                    state.option === number && (
                      <Tutorial key={number} number={number} text={text} mod="tutorial-description_top" />
                    ),
                )

              /* eslint-enable */
            }
            {state.option === null && <Tutorial number={1} text="Service" />}
          </Demo>
        )}

        {
          /*eslint-disable */
          state.isHovered &&
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
            repeatTutorial();
          }}
          onOptionClick={(option) => {
            if (typeof option === 'number' && option !== 9) {
              startSMS(option);
            }
          }}
          isOpen={state.tutorial.isOpen}
          chosenOption={state.option}
          isHovered={state.isHovered}
        />
      )}
    </>
  );
}

export default view(Main);
