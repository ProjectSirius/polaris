import React from 'react';

const FileRenderField = ({
  input,
  meta: { touched, error },
  classes,
  ...custom
}) => {
  return (
    <div className={classes.uploadBtnWrapper} {...custom}>
      <button className={classes.btn}>Upload a file</button>
      <input type="file" />
    </div>
  );
};

export default FileRenderField;
