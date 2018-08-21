export default {
  card: {
    width: '100% !important',
    height: '100%',
    maxHeight: '575px',
    transition: '.25s !important',
    textDecoration: 'none !important',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      cursor: 'pointer',
      textDecoration: 'none !important',
    },

    '&:hover div > a > span': {
      transform: 'translate(5px, 0)',
    },
  },

  cardList: {
    flexDirection: 'row !important',
    height: '270px !important',
    transition: '.25s !important',
  },

  mainTitle: {
    margin: '15px 0 !important',
    fontWeight: '600',
  },

  date: {
    fontSize: '13px',
    fontWeight: 500,
    color: 'grey',
  },

  bodyContent: {
    fontSize: '15px',
    lineHeight: 1.8,
  },

  moreOffer: {
    border: 'none !important',
    boxShadow: 'none !important',
    color: '#55acee !important',
    fontSize: '15px !important',
    transition: '.25s !important',
    display: 'flex !important',
    alignItems: 'center',
    width: '100%',
    padding: '10px 0 !important',
    paddingLeft: '11px !important',

    '& > span': {
      color: '#55acee',
    },
  },

  iconColor: {
    color: '#55acee',
  },
};
