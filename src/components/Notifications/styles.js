export default {
  dropdownParent: {
    paddingTop: '1.2em !important',
    textAlign: 'center !important',

    '@media screen and (max-width: 768px)': {
      paddingBottom: 20,
    },

    '&:hover': {
      borderBottom: '2px solid #000',
      marginBottom: '-2px',
    },

    '&.ui.scrolling.dropdown .menu': {
      width: '500px !important',
      minWidth: 'auto !important',

      '@media screen and (max-width: 768px)': {
        width: '100% !important',
        maxHeight: window.innerHeight - 100,
      },
    },
  },

  notifWrapper: {
    fontSize: '16px !important',

    '& .date': {
      marginBottom: '5px !important',
      fontSize: '14px !important',
    },
  },
};
