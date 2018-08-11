export default {
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > a': {
      display: 'block',
      textAlign: 'center',
      textDecoration: 'none',
      width: '100%',
      '&:hover': {
        background: '#f5f5f5',
        color: '#212121',
      },
    },
  },
  navLink: {
    margin: '5px',
    color: '#212121',
    fontWeight: '700',
    fontSize: '12px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  navLinkLogin: {
    marginRight: '20px',
  },

  navLinksAuth: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '60px',
  },

  dropDownBtn: {
    height: '60px',

    '& button': {
      height: '60px ',

      background: '#49c5b6',
      transition: '0.5s',

      border: '#49c5b6',
      borderRadius: 0,
      color: '#fff',

      '&:hover': {
        background: '#7cc0b8 !important',
        color: '#fff',
      },

      '&:focus': {
        background: '#7cc0b8 !important',
        color: '#fff',
      },

      '&:active': {
        background: '#7cc0b8 !important',
        color: '#fff',
      },

      '&:active:hover': {
        background: '#7cc0b8 !important',
        color: '#fff',
      },

      '&:active:focus': {
        background: '#7cc0b8 !important',
        color: '#fff',
      },

      '&:checked': {
        background: '#7cc0b8 !important',
        color: '#fff',
      },

      '&:visited': {
        background: '#7cc0b8 !important',
        color: '#fff',
      },
    },
  },

  /*
 * media
 */
  '@media screen and (max-width: 640px)': {
    navLinksAuth: {
      flexDirection: 'column',
      width: '100%',
      height: 'auto',
    },

    navLink: {
      fontSize: '12px',
      width: '100%',
      margin: '0',
      borderBottom: '1px solid #e6eaea',
      color: '#212121',
      transition: '0.5s',

      '&:hover': {
        background: '#fff',
      },

      '& a': {
        display: 'block',
        padding: '14px 0',
        width: '100%',
      },
    },

    dropDownBtn: {
      width: '100%',
      margin: '0',
      padding: '0',
      textAlign: 'center',

      '& > div': {
        width: '100%',
      },

      '& button': {
        width: '100%',
      },

      '& ul > li > a': {
        padding: '14px 0',
      },
    },
  },
};
