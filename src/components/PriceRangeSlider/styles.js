export default {
  priceSlider: {
    position: 'relative',
    width: '100%',
    margin: '0 auto 20px',
    height: '35px',
    textAlign: 'center',
  },

  slider: {
    WebkitAppearance: 'none',
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: '15px',
    width: '100%',
    height: '15px',
    borderRadius: '5px',
    background: '#fff',
    outline: 'none',
    opacity: '1',
    WebkitTransition: '.2s',
    transition: 'opacity .2s',

    '&::-webkit-slider-thumb': {
      pointerEvents: 'all',
      position: 'relative',
      zIndex: 1,
      outline: 0,
      WebkitAppearance: 'none',
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: '#5ebba6d4',
    },

    '&::-moz-range-thumb': {
      pointerEvents: 'all',
      position: 'relative',
      zIndex: 1,
      outline: 0,
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: '#5ebba6d4',
    },
  },
};
