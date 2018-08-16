export default {
  confAndSearchWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  searchWrapper: {
    width: '67%',
    flexGrow: '1',
  },

  confWrapper: {
    width: '33%',
    maxWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15px',

    '& > div': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
};
