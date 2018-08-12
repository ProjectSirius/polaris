import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

import './styles.css';

const SubmitBtn = ({ valid, isRequesting, value }) => {
  return (
    <div className="login-submit-wrapper">
      <Button
        bsSize="large"
        block
        type="submit"
        disabled={!valid || isRequesting}
      >
        {value}
      </Button>
    </div>
  );
};

SubmitBtn.propTypes = {
  valid: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default SubmitBtn;
