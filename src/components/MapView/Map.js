import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './StickMarker';
import { K_SIZE } from './styles';

const getCord = (n = 0, m = 1) => +(n + m * Math.random()).toFixed(7);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.1860052,
      lng: 44.5150187,
    },
    zoom: 11,
  };

  static onBoundsChange = (center, zoom /* , bounds, marginBounds */) => {
    this.props.onCenterChange(center);
    this.props.onZoomChange(zoom);
  };

  static onChildClick = (key, childProps) => {
    this.props.onCenterChange([childProps.lat, childProps.lng]);
  };

  static onChildMouseEnter = (key /*, childProps */) => {
    this.props.onHoverKeyChange(key);
  };

  static onChildMouseLeave = (/* key, childProps */) => {
    this.props.onHoverKeyChange(null);
  };

  childeClick = i => {
    this.props.groupOffer.selectedIds.includes(`${i}`)
      ? this.props.removeFromGroupOffer(`${i}`)
      : this.props.addToGroupOffer(`${i}`);
  };
  markers = () => {
    return Object.keys(this.props.data.info).map((key, i) => {
      const id = this.props.data.info[key].id;
      return (
        <Marker
          key={this.props.data.info[key].id}
          id={this.props.data.info[key].id}
          lat={this.props.data.info[key].lat || getCord(40, 0.2)}
          lng={this.props.data.info[key].lng || getCord(44.5, 0.3)}
          text={this.props.data.info[key].title.slice(0, 3)}
          title={this.props.data.info[key].title}
          img={
            this.props.data.info[key].fields.filter(el => +el.idField === 23)[0]
              .value || 'https://source.unsplash.com/600x400/?dj'
          }
          selected={this.props.groupOffer.selectedIds.includes(`${id}`)}
          type={this.props.type}
        />
      );
    });
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC3eoata7ct7kEsvsvf2PITnaiUHOMTO-Y' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChange={obj => obj}
          onChildClick={i => this.childeClick(i)}
          hoverDistance={K_SIZE / 2}
          onBoundsChange={this._onBoundsChange}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {this.markers()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
