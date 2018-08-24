import React, { Component } from 'react';

import { greatPlaceStyle, greatPlaceStyleHover } from './styles';

export default class MyGreatPlaceWithControllableHover extends Component {
  render() {
    const style = this.props.hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
      <div className="hint hint--html hint--info hint--top" style={style}>
        <div>{this.props.text}</div>
        <div style={{ width: 80 }} className="hint__content">
          Сlick me
        </div>
      </div>
    );
  }
}
