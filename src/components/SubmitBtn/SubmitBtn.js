import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'semantic-ui-react';

const SubmitBtn = ({
  valid,
  isRequesting,
  value,
  size = 'large',
  onClick,
  classes,
}) => {
  return (
    <Button
      disabled={!valid}
      fluid
      loading={isRequesting}
      size={size}
      onClick={onClick || ''}
      className={classes.btn}
    >
      {value}
    </Button>
  );
};

SubmitBtn.propTypes = {
  valid: PropTypes.bool.isRequired,
  isRequesting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default SubmitBtn;
