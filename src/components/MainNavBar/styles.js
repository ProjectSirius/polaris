export default {
  link: {
    color: 'rgba(0, 0, 0, .9) !important',
    fontWeight: '700',

    textDecoration: 'none !important',
  },

  mainNavBar: {
    backgroundColor: 'rgba(255, 255, 255, 1) !important',
    padding: '0 30px',
    zIndex: '100000 !important',

    '& > .item, & > dropdown': {
      padding: '1.2em !important',
      display: 'flex',
      justifyContent: 'center',
      transition: 'all .5s !important',

      '&:hover': {
        borderBottom: '2px solid #000 !important',
      },
    },

    '& > .right.menu > .item, & > .right.menu > dropdown': {
      padding: '1.2em !important',
      display: 'flex',
      justifyContent: 'center',
      transition: 'all .5s !important',

      '&:hover': {
        borderBottom: '2px solid #000 !important',
      },
    },

    '@media screen and (max-width: 768px)': {
      marginTop: '60px !important',
    },
  },

  mainTitle: {
    fontFamily: "'Special Elite', cursive",
    fontWeight: '700 !important',
    transition: '0 !important',
    textTransform: 'uppercase !important',
    letterSpacing: '3px',
    fontSize: '18px',
    color: '#337365 !important',
    position: 'relative',
    top: '5px',

    '&.item': {
      padding: '1.2em !important',
    },
    '&.item:hover': {
      borderColor: 'transparent !important',
    },
  },

  burgerWrapper: {
    height: '100% !important',
    marginTop: '2px',
  },

  hamburger: {
    cursor: 'pointer',
  },

  smallScreenMargin: {
    marginTop: '49px',
    zIndex: '0',
  },

  smallScreenMenu: {
    zIndex: '100000 !important',
    backgroundColor: 'rgba(255, 255, 255, 1) !important',
    padding: '0 30px',
    paddingRight: '0',
  },

  selectLanguage: {
    marginTop: '-10px !important',
  },

  menuItemSettings: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1.2em !important',
    transition: 'all .5s !important',

    '&:hover': {
      borderBottom: '2px solid #000 !important',
    },
  },

  signUp: {
    transition: '0 !important',

    '&.item:hover': {
      borderColor: 'transparent !important',
    },
  },

  dropLink: {
    '&.item:hover': {
      borderColor: 'transparent !important',
    },
  },

  menuItemDrop: {
    '&.item': {
      padding: '.9em !important',
    },
  },

  cart: {
    padding: '16px 13px !important',
  },

  labelColor: {
    background: '#5ebba6d4 !important',
  },
};
