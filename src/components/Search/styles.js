export default {
  searchWrapper: {
    width: '80%',

    '& > div': {
      margin: 0,
      width: '90%',
    },
  },

  '@media screen and (max-width: 640px)': {
    searchWrapper: {
      width: '100%',

      '& > div': {
        width: '100%',
      },
    },
  },
};
