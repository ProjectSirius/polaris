export default {
  rating: {
    lineHeight: 1,
    display: 'inline-block',
    textAlign: 'center',
  },

  ratingItem: {
    display: 'inline',
    fontSize: 0,
    marginLeft: '3px',

    '&:before': {
      fontSize: '30px',
      content: '"★"',
      color: '#d3d3d3',
    },

    '&:hover': {
      cursor: 'pointer',
    },

    '&:first-child': {
      marginLeft: 0,
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
