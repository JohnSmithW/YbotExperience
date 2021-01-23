import React, { useState } from 'react';
import { view } from '@risingstack/react-easy-state';
import state from '../../store';
// import { useTransition} from 'react-spring';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Theme from '../../components/Theme/Theme';
import Intro from '../../components/Intro/Intro';
import UserInfoForm from '../../components/UserInfoForm/UserInfoForm';
import UserDetailsForm from '../../components/UserDetailsForm/UserDetailsForm';
import sendUserInfo from '../../actions/sendUserInfo';

// const transitions = useTransition(index, (p) => p, {
//   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
// });

function Main() {
  const [page, setPage] = useState(0);

  return (
    <>
      <Theme theme={page === 5 ? 'theme_white' : 'theme_blue'} />
      <Container>
        <Header isDemo={page === 5} />
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
            }}
            countryList={[
              { id: 0, name: 'USA' },
              { id: 1, name: 'Australia' },
            ]}
          />
        )}
      </Container>
    </>
  );
}

export default view(Main);
