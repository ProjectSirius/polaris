export default {
  loading: {
    position: 'absolute !important',
    left: '57% !important',
    top: '50% !important',
  },

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
    display: 'grid',
    gridTemplateColumns: '32% 32% 32%',
    gridGap: '3%',
    backgroundColor: '#fff',
    color: '#444',

    '& > div': {
      transition: 'all .9s ease',
    },

    '@media screen and (min-width: 1800px)': {
      gridTemplateColumns: '24% 24% 24% 24%',
      gridGap: '2%',
    },

    '@media screen and (min-width: 2600px)': {
      gridTemplateColumns: '19% 19% 19% 19% 19%',
      gridGap: '1%',
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
