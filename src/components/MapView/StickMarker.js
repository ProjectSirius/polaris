import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import {
  greatPlaceStyle,
  // greatPlaceCircleStyle,
  // greatPlaceCircleStyleHover,
  // greatPlaceStickStyle,
  // greatPlaceStickStyleHover,
  // greatPlaceStickStyleShadow,
  // greatPlaceStyleSelected,
  infoCard,
  infoCardHower,
} from './styles';

export default class MyGreatPlaceWithStick extends Component {
  state = {
    infoCardHower: false,
  };
  render() {
    const {
      //  text,
      zIndex,
    } = this.props;

    const style = {
      ...greatPlaceStyle,
      zIndex: this.props.$hover ? 1000 : zIndex,
    };

    const color = this.props.selected
      ? 'red'
      : this.props.$hover
        ? 'grey'
        : 'blue';
    // const stickStyle = this.props.$hover
    //   ? greatPlaceStickStyleHover
    //   : greatPlaceStickStyle;
    const info =
      this.props.$hover || this.state.infoCardHower ? infoCardHower : infoCard;

    return (
      <Icon name="map marker alternate" size="huge" color={color} style={style}>
        <div
          style={info}
          onMouseEnter={() => {
            this.setState({ infoCardHower: true });
          }}
          onMouseLeave={() => {
            this.setState({ infoCardHower: false });
          }}
        >
          <h4>{this.props.title}</h4>
          <hr />
          <a href={`/content/${this.props.id}`}>go to chanel</a>
          <hr />
        </div>
        {/* <Card  style={info}
          onMouseEnter={() => {
            this.setState({ infoCardHower: true });
          }}
          onMouseLeave={() => {
            this.setState({ infoCardHower: false });
          }}>
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>chanel link</Card.Meta>
            <Card.Description>
            <a href={`/content/${this.props.id}`}>go to chanel</a>
            </Card.Description>
          </Card.Content>
        </Card> */}
        {/* <div style={greatPlaceStickStyleShadow} />
        <div style={circleStyle}>{text}</div>
        <div style={stickStyle} /> */}
        {/* <Icon name="map marker alternate" size="huge" color="blue" /> */}
      </Icon>
    );
  }
}
