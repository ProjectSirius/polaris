export default {
  cardsWrapperGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '15px 0',

    '& > div': {
      transition: 'all 0.6s ease',
    },
  },

  /*********list view**********/
  cardsWrapperList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px 0',

    '& > div': {
      transition: 'all 0.6s ease-in-out',
    },
  },
};
