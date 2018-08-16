export default {
  parentLinkList: {
    display: 'inline-block',
    width: '80%',
    margin: '40px 0',
  },

  parentLinkGrid: {
    display: 'inline-block',
    margin: '40px 0',
  },

  cardsWrapperGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    '& > div': {
      transition: 'all .9s ease',
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

  '@media screen and (max-width: 640px)': {
    cardsWrapperList: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardsWrapperGrid: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    parentLinkList: {
      width: '100%',
    },
  },
};
