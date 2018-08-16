export default {
  rating: {
    lineHeight: 1,
    display: 'flex',
    padding: '5px 0',
    justifyContent: 'center',
    cursor: 'pointer',
  },

  defaultStar: {
    '&:hover span': {
      color: '#ED1C24',
    },

    cursor: 'pointer',
    fontSize: '30px',
    padding: '5px',
  },

  rateStar: {
    '& span': {
      color: '#ED1C24',
    },

    cursor: 'pointer',
    fontSize: '30px',
    padding: '5px',
  },
};
