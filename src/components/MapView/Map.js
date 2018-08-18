import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker'


const getCord = (n = 0) => {
  let cord = n + 2 * Math.random();
  cord = cord.toFixed(7);
  console.log(+cord);
  return +cord;
  
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.1860052,
      lng: 44.5150187,
    },
    zoom: 12,
  };
  markers = this.props.data.map(info => {
    return <Marker
            key={info.id}
            lat={info.lat || getCord(40)}
            lng={info.lng || getCord(43)}
            title={info.title}
    />
  })
  render() {
    
    return (
      
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC3eoata7ct7kEsvsvf2PITnaiUHOMTO-Y' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
