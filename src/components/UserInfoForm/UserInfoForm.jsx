import React, { useState, useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
}));

export default function UserInfoForm({ page, text, onClick }) {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    /*eslint-disable */
    <Spring from={{ x: 100, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
      {({ x, opacity }) => (
        <form
          style={{ transform: `translateX(${x}px)`, opacity: opacity }}
          onSubmit={(event) => {
            event.stopPropagation();
            onClick(value);
          }}
          className="form"
        >
          <div className="form-main">
            <div className="form-main__page">{page}</div>

            <div className="form-main-wrapper">
              <span className="form-main-wrapper__title">{text}</span>
              <ThemeProvider theme={theme}>
                <TextField
                  inputRef={inputRef}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  onChange={(event) => {
                    letterUpperCase(event.target.value, setValue);
                  }}
                  value={value}
                  className={classes.input}
                  id="standard-basic"
                  label="Type your answer here..."
                />
              </ThemeProvider>

              <div className={value.length > 0 ? 'button-container button-container_open' : 'button-container'}>
                <Button
                  mod="button_check"
                  onClick={() => {
                    onClick(value);
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
                      d="M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z"
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
    /* eslint-enable */
  );
}

UserInfoForm.defaultProps = {
  page: '01',
  text: "What's your first name?",
};

UserInfoForm.propTypes = {
  page: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
