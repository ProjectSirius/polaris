export default {
  '@global html ,body, #root, .App': {
    height: '100%',
  },
  channelInfo: {
    '& .text': {
      borderTop: '4px double',
      borderBottom: '4px double',
    },
  },

  chanelImg: {
    maxHeight: '400px',
    margin: '20px 0',
  },
  userData: {
    marginTop: '10px',
    marginBottom: '20px',
    '& img': {
      width: '80px',
      height: '80px',
    },
  },
  changeChannel: {
    '& button': {
      margin: '5px',
      padding: '5px',
      minWidth: '70px',
    },
    '@media (min-width: 991px)': {
      '& ': {
        textAlign: 'right',
      },
    },
  },
  infoList: {
    listStyle: 'none',
    display: 'flex',
    '& li': {
      border: 'solid 1px #999',
      padding: '5px',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
};
