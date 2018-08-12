export default {
  rating: {
    lineHeight: 1,
    display: 'inline-block',
  },

  ratingItem: {
    display: 'inline',
    fontSize: 0,

    '&:before': {
      fontSize: '30px',
      content: '"★"',
      color: '#d3d3d3',
    },

    '&:hover': {
      cursor: 'pointer',
    },
  },

  ratingItemSelected: {
    '&:before': {
      color: '#ffd700',
    },
  },

  ratingInput: {
    position: 'absolute',
    visibility: 'hidden',
  },
};
