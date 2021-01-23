import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './UserDetailsForm.scss';
import letterUpperCase from '../../actions/letterUpperCase';
import Button from '../Button/Button';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#fff' },
    type: 'dark',
  },
});

const useStyles = makeStyles(() => ({
  input: { width: window.innerWidth > 1100 ? 720 : '100%', marginTop: 40 },
  resize: { fontSize: window.innerWidth > 1100 ? 32 : 16 },
  error: {
    borderBottom: '1px solid #d32f2f',
    '&:before': {
      borderBottom: '1px solid #d32f2f',
    },

    '&:after': {
      borderBottom: '1px solid #d32f2f',
    },

    '&:hover:not(.Mui-disabled)': {
      borderBottom: '1px solid #d32f2f',
      '&:before': {
        borderBottom: '1px solid #d32f2f',
      },
    },
  },
}));

export default function UserDetailsForm({ page, text, countryList, onClick }) {
  const classes = useStyles();
  const [search, setSearch] = useState('USA');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isValidated, setIsvalidated] = useState({ email: true, all: false });

  function validateEmail(value) {
    if (/^\s+$/.test(value) || value === '' || value.indexOf(' ') > -1 || value.indexOf('@') === -1) {
      setIsvalidated({ ...isValidated, email: false });
    } else {
      setIsvalidated({ email: true, all: true });
    }
  }

  return (
    <Spring from={{ x: 100, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
      {({ x, opacity }) => (
        <form
          onSubmit={(event) => {
            event.stopPropagation();
            onClick();
          }}
          className="form"
          style={{ transform: `translateX(${x}px)`, opacity }}
        >
          <div className="form-main">
            <div className="form-main__page">{page}</div>

            <div className="form-main-wrapper">
              <span className="form-main-wrapper__title">{text}</span>
              <ThemeProvider theme={theme}>
                <TextField
                  onChange={() => {
                    setSearch(search);
                  }}
                  onFocus={() => {
                    setIsOpen(true);
                  }}
                  value={search}
                  className={classes.input}
                  id="standard-basic"
                  label="Country"
                  autoComplete="off"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                    startAdornment: (
                      /* eslint-disable */
                      <>
                        <img
                          onClick={() => {
                            setIsOpen(!isOpen);
                          }}
                          className="user-details__arrow"
                          src="/images/icons/userInfo/arrow.svg"
                          alt=""
                        />
                        <div className={isOpen ? 'user-details-list user-details-list_open' : 'user-details-list'}>
                          {countryList.map(({ id, name }) => (
                            <div
                              onClick={() => {
                                setSearch(name);
                                setIsOpen(false);
                              }}
                              onKeyDown={(event) => {
                                event.stopPropagation();
                              }}
                              key={id}
                              className="user-details-list-item"
                            >
                              <span className="user-details-list-item__item">{name}</span>
                            </div>
                          ))}
                        </div>
                      </>
                      /* eslint-enable */
                    ),
                  }}
                />
              </ThemeProvider>

              <ThemeProvider theme={theme}>
                <TextField
                  onChange={(event) => {
                    letterUpperCase(event.target.value.replace(/[^0-9]/g, ''), setPhoneNumber);
                  }}
                  onFocus={() => {
                    setIsOpen(false);
                  }}
                  value={phoneNumber}
                  className={classes.input}
                  id="standard-basic"
                  label="Your phone number"
                  type="tel"
                  placeholder="0035542278416"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                />
              </ThemeProvider>

              <ThemeProvider theme={theme}>
                <TextField
                  onChange={(event) => {
                    letterUpperCase(event.target.value, setEmail);
                    validateEmail(email);
                  }}
                  onFocus={() => {
                    setIsOpen(false);
                  }}
                  value={email}
                  className={classes.input}
                  id="standard-basic"
                  label="Email adress"
                  type="email"
                  placeholder="tanetsdmitriy@gmail.com"
                  InputProps={{
                    classes: {
                      input: classes.resize,
                      underline: isValidated.email ? null : classes.error,
                    },
                  }}
                />
              </ThemeProvider>

              <div
                className={
                  search !== '' && phoneNumber !== '' && email !== ''
                    ? 'button-container button-container_open'
                    : 'button-container'
                }
              >
                <Button
                  mod="button_check"
                  onClick={() => {
                    if (isValidated.all) {
                      onClick({ search, phoneNumber, email });
                    }
                  }}
                >
                  confirm
                  <svg
                    className="form__img"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="button__img"
                      /* eslint-disable */
                      d="M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z"
                      /* eslint-enable */
                    />
                  </svg>
                </Button>
                <div className="button-container-wrapper">
                  <span className="button-container-wrapper__text">Press</span>
                  <span className="button-container-wrapper__text button-container__text_bold">Enter</span>
                  <img className="button-container-wrapper__img" src="/images/icons/userInfo/key.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </Spring>
  );
}

UserDetailsForm.defaultProps = {
  page: '04',
  text: 'For the full experience, enter your contact details',
};

UserDetailsForm.propTypes = {
  page: PropTypes.string,
  text: PropTypes.string,
  countryList: PropTypes.instanceOf(Array).isRequired,
  onClick: PropTypes.func.isRequired,
};