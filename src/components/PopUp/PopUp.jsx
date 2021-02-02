import React from 'react';
import { PropTypes } from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  /* eslint-disable */

  return <MuiAlert elevation={6} variant="filled" {...props} />;

  /* eslint-enable */
}

const useStyles = makeStyles(() => ({
  success: {
    background: '#0043ce',
    color: '#fff',
  },
  fail: {
    background: '#da3b01',
    color: '#fff',
  },
}));

export default function PopUp({ isOpen, text, type, handleClose, isHidden }) {
  const classes = useStyles();

  return (
    <Snackbar open={isOpen} autoHideDuration={isHidden ? 5000 : null} onClose={handleClose}>
      <Alert
        className={type ? classes.success : classes.fail}
        onClose={handleClose}
        severity={type ? 'success' : 'error'}
      >
        {text}
      </Alert>
    </Snackbar>
  );
}

PopUp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
