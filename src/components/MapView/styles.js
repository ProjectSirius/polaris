const K_CIRCLE_SIZE = 30;
const K_STICK_SIZE = 10;
const K_STICK_WIDTH = 3;
const K_SIZE = 38;

// const greatPlaceStyle = {
//   // initially any map object has left top corner at lat lng coordinates
//   // it's on you to set object origin to 0,0 coordinates
//   position: 'absolute',
//   width: K_CIRCLE_SIZE,
//   height: K_CIRCLE_SIZE + K_STICK_SIZE,
//   left: -K_CIRCLE_SIZE / 2,
//   top: -(K_CIRCLE_SIZE + K_STICK_SIZE),
// };

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
  fontSize: 30,
  fontWeight: 'bold',
};

const greatPlaceCircleStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: K_CIRCLE_SIZE,
  height: K_CIRCLE_SIZE,
  border: '3px solid #f44336',
  borderRadius: K_CIRCLE_SIZE,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 12,
  fontWeight: 'bold',
  padding: 0,
  cursor: 'pointer',
  boxShadow: '0 0 0 1px white',
};

const greatPlaceCircleStyleHover = {
  ...greatPlaceCircleStyle,
  border: '3px solid #3f51b5',
  color: '#f44336',
};

const greatPlaceStickStyleShadow = {
  position: 'absolute',
  left: K_CIRCLE_SIZE / 2 - K_STICK_WIDTH / 2,
  top: K_CIRCLE_SIZE,
  width: K_STICK_WIDTH,
  height: K_STICK_SIZE,
  backgroundColor: '#f44336',
  boxShadow: '0 0 0 1px white',
};

const greatPlaceStickStyle = {
  position: 'absolute',
  left: K_CIRCLE_SIZE / 2 - K_STICK_WIDTH / 2,
  top: K_CIRCLE_SIZE,
  width: K_STICK_WIDTH,
  height: K_STICK_SIZE,
  backgroundColor: '#f44336',
};

const greatPlaceStickStyleHover = {
  ...greatPlaceStickStyle,
  backgroundColor: '#3f51b5',
};
const greatPlaceStyleHover = {
  ...greatPlaceStyle,
  border: '5px solid #3f51b5',
  color: 'green',
};
const greatPlaceStyleSelected = {
  ...greatPlaceStyle,
  border: '5px solid #fafafa',
  color: 'green',
};

const infoCard = {
  backgroundColor: 'gainsboro',
  border: 'solid black 1px',
  width: '100px',
  height: 'auto',
  visibility: 'hidden',
  fontSize: 12,
  borderRadius: '4px',
};

const infoCardHower = {
  ...infoCard,
  visibility: 'visible',
  color: 'black',
  zIndex: '999',
};
export {
  greatPlaceStyle,
  greatPlaceCircleStyle,
  greatPlaceCircleStyleHover,
  greatPlaceStickStyle,
  greatPlaceStickStyleHover,
  greatPlaceStickStyleShadow,
  greatPlaceStyleSelected,
  greatPlaceStyleHover,
  infoCard,
  infoCardHower,
  K_CIRCLE_SIZE,
  K_STICK_SIZE,
  K_SIZE,
};
