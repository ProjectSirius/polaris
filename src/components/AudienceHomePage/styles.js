export default {
  filterPageWrapper: {
    display: 'flex',
    padding: '10px',
    margin: '55px 30px',
  },

  filterPageLeft: {
    width: '33%',
    maxWidth: '300px',
  },

  filterPageRight: {
    width: '66%',
    flexGrow: '1',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '50px',
  },

  /*
   * media
   */
  '@media screen and (max-width: 640px)': {
    filterPageWrapper: {
      flexDirection: 'column',
      margin: '30px 50px',
      padding: 0,
    },

    filterPageLeft: {
      width: '100%',
      maxWidth: '100%',
      margin: '20px 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },

    filterPageRight: {
      width: '100%',
      maxWidth: '100%',
      margin: '20px 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
};
