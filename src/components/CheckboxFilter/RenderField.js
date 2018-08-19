import React, { Component } from 'react';
import { Glyphicon, ControlLabel } from 'react-bootstrap';

class TextField extends Component {
  constructor() {
    super();

    this.state = {
      value: false,
    };
  }

  onChange = () => {
    const { value } = this.state;
    this.setState({
      value: !value,
    });
  };

  render() {
    const { touched, label, ...props } = this.props;
    const { classes } = props;

    return (
      <ControlLabel className={classes.checkboxItem}>
        <label
          className={`
            btn
            btn-default
            active
            ${classes.checkboxWrapper}
            `}
        >
          <input
            {...props}
            onClick={this.onChange}
            className={classes.checkbox}
          />
          <Glyphicon
            glyph="glyphicon glyphicon-ok"
            className={this.state.value ? classes.checked : classes.unchecked}
          />
        </label>
        <span className={classes.option}>{label}</span>
      </ControlLabel>
    );
  }
}

const renderField = props => {
  const {
    input,
    meta: { touched, error },
    ...custom
  } = props;
  return <TextField touched={touched} error={error} {...input} {...custom} />;
};

export default renderField;
