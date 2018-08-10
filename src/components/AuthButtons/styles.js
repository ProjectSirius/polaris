export default {
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
      height: '60px !important',

      background: '#49c5b6',
      transition: '0.5s',

      border: '#49c5b6',
      borderRadius: 0,

      '&:hover': {
        background: '#7cc0b8 !important',
      },

      '&:focus': {
        background: '#7cc0b8 !important',
      },

      '&:active': {
        background: '#7cc0b8 !important',
      },

      '&:checked': {
        background: '#7cc0b8 !important',
      },

      '&:visited': {
        background: '#7cc0b8 !important',
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
