import React from 'react';
import { Button } from 'react-bootstrap';

const SubmitBtn = ({ valid, isRequesting, value, classes }) => {
  return (
    <div className={classes.submitWrapper}>
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

export default SubmitBtn;
