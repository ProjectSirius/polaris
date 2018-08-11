export default {
  searchWrapper: {
    width: '100%',

    '& > div': {
      margin: 0,
      width: '100%',
    },
  },

  search: {
    height: '53px',
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
