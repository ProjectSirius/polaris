export default {
  sliderContainer: {
    width: '100%',
  },

  slider: {
    WebkitAppearance: 'none',
    width: '100%',
    height: '15px',
    borderRadius: '5px',
    background: '#d3d3d3',
    outline: 'none',
    opacity: '0.7',
    WebkitTransition: '.2s',
    transition: 'opacity .2s',

    '&:hover': {
      opacity: 1,
    },

    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      appearance: 'none',
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      background: '#49c5b6',
      cursor: 'pointer',
    },

    '&::-moz-range-thumb': {
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      background: '#49c5b6',
      cursor: 'pointer',
    },
  },
};
