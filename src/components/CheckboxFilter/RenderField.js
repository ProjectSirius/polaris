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
      <div>
        <ControlLabel>
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
              checked={this.state.value}
              onChange={this.onChange}
              className={classes.checkbox}
            />
            <Glyphicon
              glyph="glyphicon glyphicon-ok"
              className={this.state.value ? classes.checked : classes.unchecked}
            />
          </label>
          <span className={classes.option}>{label}</span>
        </ControlLabel>
      </div>
    );
  }
}

const renderField = props => {
  const {
    input,
    meta: { touched, error },
    ...custom
  } = props;
  return (
    <div>
      <TextField touched={touched} error={error} {...input} {...custom} />
    </div>
  );
};

export default renderField;
