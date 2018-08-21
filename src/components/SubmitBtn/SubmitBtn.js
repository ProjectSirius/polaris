import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'semantic-ui-react';

const SubmitBtn = ({ valid, isRequesting, value, size = 'large' }) => {
  return (
    <Button
      disabled={!valid}
      color="twitter"
      fluid
      loading={isRequesting}
      size={size}
    >
      {value}
    </Button>
  );
};

SubmitBtn.propTypes = {
  valid: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default SubmitBtn;
