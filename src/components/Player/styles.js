export default {
  player: {
    margin: '15px 0',
    backgroundColor: '#5ebba682',
    width: '100%',
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },

  controls: {
    float: 'left',

    '& a': {
      textDecoration: 'none',
      height: '75px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      boxSizing: 'border-box',
      textAlign: 'center',
      padding: '17px 10px',
      float: 'left',
      color: 'white',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: '#6fb7b2',
      },
    },
  },

  progress: {
    position: 'absolute',
    left: '58px',
    right: '100px',
    background: '#6fb7b2',
    cursor: 'pointer',
    height: '18px',

    '& > div': {
      position: 'absolute',
      left: '5px',
      right: '5px',
      top: '5px',
      bottom: '5px',

      '& div': {
        position: 'absolute',
        left: '0',
        top: '0',
        bottom: '0',
        width: '50%',
        background: '#f3f8f3',
      },
    },
  },

  time: {
    position: 'absolute',
    right: '0',
    width: '100px',
    color: 'white',
    fontSize: '12px',
    textAlign: 'center',
  },
};
