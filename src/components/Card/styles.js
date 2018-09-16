export default {
  card: {
    display: 'inline-block',
    width: '100% !important',
    transition: '.5s !important',
    margin: '10px !important',
    position: 'relative',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
      cursor: 'pointer',
      textDecoration: 'none !important',
    },

    '&:hover a': {
      color: 'rgba(0, 0, 0, .87)',
    },

    '&:hover div > a > span': {
      transform: 'translate(5px, 0)',
    },
  },

  parentLinkList: {
    width: '100% !important',
    height: '100%',
    maxHeight: '575px',
    transition: '.25s !important',
    textDecoration: 'none !important',
    color: 'rgba(0, 0, 0, .87)',
    display: 'flex',
  },

  parentLinkGrid: {
    width: '100% !important',
    height: '100%',
    maxHeight: '575px',
    transition: '.25s !important',
    textDecoration: 'none !important',
    maxWidth: '475px',
    color: 'rgba(0,0,0,.87)',

    '&:hover': {
      color: 'rgba(0,0,0,.87)',
    },
  },

  cardList: {
    flexDirection: 'row !important',
    height: '270px ',
    transition: '.25s !important',
    width: '80% !important',
  },

  cardContent: {
    padding: '10px',
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

  removeOffer: {
    color: 'rgb(217, 83, 79)',

    '& > span': {
      color: 'rgb(217, 83, 79)',
    },
  },

  addOffer: {
    color: '#5ebba6 !important',

    '& > span': {
      color: '#5ebba6 !important',
    },
  },

  moreOffer: {
    border: 'none !important',
    boxShadow: 'none !important',

    fontSize: '15px !important',
    transition: '.25s !important',
    display: 'flex !important',
    alignItems: 'center',
    padding: '10px 0 !important',
    paddingLeft: '11px !important',
  },

  iconColor: {
    color: '#5ebba6 !important',
  },

  delIconColor: {
    color: 'rgb(217, 83, 79)',
  },

  chadCheck: {
    position: 'absolute',
    zIndex: 100,

    '& > div': {
      margin: '0  !important',

      '& > input:checked~label:after': {
        fontSize: '30px !important',
      },

      '& > label': {
        fontSize: '30px !important',

        '&:before': {
          height: '25px !important',
          width: '25px !important',

          '&:after': {
            fontSize: '30px !important',
          },
        },
      },
    },
  },

  link: {
    '&:hover': {
      color: '#5ebba6 !important',
    },
  },

  '@media screen and (max-width: 1020px)': {
    cardList: {
      width: '100% !important',
    },
  },

  '@media screen and (max-width: 1040px)': {
    cardList: {
      width: '100% !important',
    },
  },
};
