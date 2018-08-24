import React, { Component } from 'react';

import {
  greatPlaceStyle,
  greatPlaceCircleStyle,
  greatPlaceCircleStyleHover,
  greatPlaceStickStyle,
  greatPlaceStickStyleHover,
  greatPlaceStickStyleShadow,
} from './styles';

export default class MyGreatPlaceWithStick extends Component {
  render() {
    const { text, zIndex } = this.props;

    const style = {
      ...greatPlaceStyle,
      zIndex: this.props.$hover ? 1000 : zIndex,
    };

    const circleStyle = this.props.$hover
      ? greatPlaceCircleStyleHover
      : greatPlaceCircleStyle;
    const stickStyle = this.props.$hover
      ? greatPlaceStickStyleHover
      : greatPlaceStickStyle;

    return (
      <div style={style}>
        <div style={greatPlaceStickStyleShadow} />
        <div style={circleStyle}>{text}</div>
        <div style={stickStyle} />
      </div>
    );
  }
}
