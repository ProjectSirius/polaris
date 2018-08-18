export default {
  '@global html ,body, #root, .App': {
    height: '100%',
  },
  topButtons: {
    textAlign: 'right',
    margin: '10px 0',
    '& button': {
      marginLeft: '5px',
    },
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
    '& > div': {
      display: 'flex',
      '& img': {
        width: '80px',
        height: '85px',
        flex: '0 0 90px',
        borderRadius: '8px',
      },
      '& > div': {
        maxWidth: '150px',
        margin: '10px',
      },
      '& a': {
        color: '#1f69c1',
        fontWeight: 600,
        fontSize: '20px',
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '& button': {
        minWidth: '100px',
      },
    },
  },
  googlemap: {
    width: '100%',
    margin: '10px 0',
  },
  rightChannel: {
    '& .thumbnail': {
      backgroundColor: 'transparent',
      '& img': {
        width: '100%',
        maxHeight: '600px',
      },
    },
  },

  channelLeft: {
    '& button': {
      margin: '10px',
      padding: '5px',
      minWidth: '70px',
    },
  },
  byButton: {
    width: '150px',
    lineHeight: '30px',
  },
};
