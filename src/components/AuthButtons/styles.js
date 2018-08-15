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
    fontWeight: '600',
    fontSize: '12px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  navLinkLogin: {
    marginRight: '20px',
  },

  navLinksAuth: {
    width: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '60px',
  },

  dropDownBtn: {
    height: '60px',

    '& button': {
      height: '60px ',

      background: '#FF5A5F',
      transition: '0.5s',

      border: '#FF5A5F',
      borderRadius: 0,
      color: '#fff !important',
      fontWeight: '700',

      '&:hover': {
        background: '#FF5A5F !important',
        color: '#fff !important',
      },

      '&:focus': {
        background: '#FF5A5F !important',
        color: '#fff !important',
      },

      '&:active': {
        background: '#FF5A5F !important',
        color: '#fff !important',
      },

      '&:active:hover': {
        background: '#FF5A5F !important',
        color: '#fff',
      },

      '&:active:focus': {
        background: '#FF5A5F !important',
        color: '#fff !important',
      },

      '&:checked': {
        background: '#FF5A5F !important',
        color: '#fff !important',
      },

      '&:visited': {
        background: '#FF5A5F !important',
        color: '#fff !important',
      },
    },
    '& div ul div a': {
      padding: '5px 0',
      margin: '5px 0',
    },
  },

  /*
 * media
 */
  '@media screen and (max-width: 500px)': {
    navLinksAuth: {
      flexDirection: 'column',
      width: 'auto',
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
