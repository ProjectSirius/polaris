import React, {PureComponent} from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import { marker } from './styles'

class Marker extends PureComponent {
  render () {
    return (
      <div >
        <h1 style={{border: 'solid 1px red'}}>
          {this.props.title}
        </h1>
      </div>
    )
  }
}

Marker.proptypes = {
  title: PropTypes.string,
}

Marker.defaultProps = {
  title: 'some place',
}

export default injectSheet(marker)(Marker);