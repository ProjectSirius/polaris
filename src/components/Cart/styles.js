export default {
  emptyCartMessage: {
    fontSize: '48px',
    display: 'flex',
    justifyContent: 'center',
    height: '63vh',
    alignItems: 'center',
    flexDirection: 'column',

    '& span': {
      marginTop: '32px',
    },

    '&:nth-child(1)': {
      color: '#e8336c',
    },
  },

  emptyCartSubMessage: {
    fontSize: '21px',
    color: '#4a3f3f',
  },

  loading: {
    position: 'relative',
    top: '385px !important',
  },

  modal: {
    height: 500,
    position: 'absolute',
    width: '900px',
    left: 'calc(50% - 450px)',
    top: 'calc(50% - 250px)',
    display: 'flex !important',
    justifyContent: 'center',
  },
};
