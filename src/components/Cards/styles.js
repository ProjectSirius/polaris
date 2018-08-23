export default {
  loading: {
    position: 'absolute !important',
    left: '57% !important',
    top: '50% !important',
  },

  cardsWrapperGrid: {
    display: 'grid',
    gridTemplateColumns: '32% 32% 32%',
    gridGap: '3%',
    backgroundColor: '#fff',
    color: '#444',
    marginTop: '25px',

    '& > div': {
      transition: 'all .9s ease',
    },

    '@media screen and (max-width: 1155px)': {
      gridTemplateColumns: '50% 50%',
      gridGap: '2%',
    },

    '@media screen and (max-width: 870px)': {
      gridTemplateColumns: '93%',
      gridGap: '2%',
    },

    '@media screen and (max-width: 640px)': {
      gridTemplateColumns: '78%',
    },

    '@media screen and (min-width: 1800px)': {
      gridTemplateColumns: '23% 23% 23% 23%',
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
  '@media screen and (max-width: 800px)': {
    cardsWrapperList: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
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
