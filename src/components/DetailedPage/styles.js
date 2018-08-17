export default {
  '@global html ,body, #root, .App': {
    height: '100%',
  },
  dropdownSeting: {
    textAlign: 'right',
    margin: '10px 0',
  },
  chanelImg: {
    width: '100%',
    margin: '20px 0',
  },
  channelDescription: {
    fontSize: '16px',
    maxHeight: '150px',
    overflowY: 'auto',
    margin: '10px 0',
  },
  userData: {
    marginTop: '10px',
    marginBottom: '20px',
    '& img': {
      width: '80px',
      height: '80px',
    },
    '& a': {
      fontSize: '18px',
      padding: '5px',
    },
  },
  rightChannel: {
    '& .thumbnail': {
      backgroundColor: 'transparent',
    },
  },

  channelLeft: {
    '& button': {
      margin: '10px',
      padding: '5px',
      minWidth: '70px',
    },
  },
};
