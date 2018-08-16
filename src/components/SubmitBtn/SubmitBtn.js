import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

const SubmitBtn = ({ valid, isRequesting, value, classes }) => {
  return (
    <div className={classes.submitWrapper}>
      <Button
        bsSize="large"
        bsStyle="danger"
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
