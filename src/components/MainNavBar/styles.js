export default {
  link: {
    color: 'rgba(0, 0, 0, .9) !important',
    fontWeight: '700',

    textDecoration: 'none !important',
  },

  mainNavBar: {
    backgroundColor: 'rgba(255, 255, 255, 1) !important',
    padding: '0 30px',

    '& .item': {
      padding: '1.2em !important',
      transition: 'all .5s !important',
      display: 'flex',
      justifyContent: 'center',

      '&:hover': {
        borderBottom: '2px solid #000 !important',
      },
    },

    '@media screen and (max-width: 768px)': {
      marginTop: '49px !important',
    },
  },

  mainTitle: {
    fontWeight: '700 !important',
    transition: '0 !important',
    textTransform: 'uppercase !important',
    letterSpacing: '3px',

    '&.item:hover': {
      borderColor: 'transparent !important',
    },
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
};
