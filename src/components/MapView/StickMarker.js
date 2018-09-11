import React, { Component } from 'react';
import { Icon, Card, Image } from 'semantic-ui-react';

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
      <div>
        <Icon
          name="map marker alternate"
          size="huge"
          color={color}
          style={{ ...style }}
        >
          <Card
            style={{ ...info, width: '160px' }}
            onMouseEnter={() => {
              this.setState({ infoCardHower: true });
            }}
            onMouseLeave={() => {
              this.setState({ infoCardHower: false });
            }}
            href={`/${this.props.type}/${this.props.id}`}
          >
            <Image src={this.props.img} />
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
            </Card.Content>
          </Card>
        </Icon>
      </div>
    );
  }
}
