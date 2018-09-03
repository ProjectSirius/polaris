import React, { Component } from 'react';

import {
  greatPlaceStyle,
  greatPlaceCircleStyle,
  greatPlaceCircleStyleHover,
  greatPlaceStickStyle,
  greatPlaceStickStyleHover,
  greatPlaceStickStyleShadow,
  greatPlaceStyleSelected,
  infoCard,
  infoCardHower,
} from './styles';

export default class MyGreatPlaceWithStick extends Component {
  state = {
    infoCardHower: false,
  };
  render() {
    const { text, zIndex } = this.props;

    const style = {
      ...greatPlaceStyle,
      zIndex: this.props.$hover ? 1000 : zIndex,
    };

    const circleStyle = this.props.selected
      ? greatPlaceStyleSelected
      : this.props.$hover
        ? greatPlaceCircleStyleHover
        : greatPlaceCircleStyle;
    const stickStyle = this.props.$hover
      ? greatPlaceStickStyleHover
      : greatPlaceStickStyle;
    const info =
      this.props.$hover || this.state.infoCardHower ? infoCardHower : infoCard;

    return (
      <div style={style}>
        <div
          style={info}
          onMouseEnter={() => {
            this.setState({ infoCardHower: true });
          }}
          onMouseLeave={() => {
            this.setState({ infoCardHower: false });
          }}
        >
          <a href={`/content/${this.props.id}`}>go to chanel</a>
          <h3>{this.props.title}</h3>
        </div>
        <div style={greatPlaceStickStyleShadow} />
        <div style={circleStyle}>{text}</div>
        <div style={stickStyle} />
      </div>
    );
  }
}
