export default {
  '@global html ,body, #root, .App': {
    height: '100vh',
  },

  container: {
    height: '100%',
  },

  delMsg: {
    textAlign: 'center',
    margin: '40px 0',
    fontWeight: '700',
  },

  title: {
    fontSize: '34px',
    fontWeight: 300,
    color: '#484848',
  },

  chanelImg: {
    width: '100%',
    margin: '20px 0',
  },

  channelDescription: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '15px',
    margin: '10px 0',
    padding: '18px 0px',

    '& > h2': {
      fontSize: '22px',
      paddingBottom: '10px',
    },

    '&  > p': {
      textAlign: 'justify',
    },
  },

  userData: {
    padding: '20px 0',

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      '& img': {
        width: '90px',
        height: '30%',
        flex: '0 0 90px',
        borderRadius: '50%',
      },

      '& a': {
        fontWeight: 500,
        fontSize: '17px',
        padding: '5px',
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        transition: 'color .2s ease-in-out',

        '& span:hover': {
          color: '#6FB7B0',
          transition: 'color .2s ease-in-out',
        },
      },
    },
  },

  price: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100px',
    fontSize: '34px',
    fontWeight: 300,
    padding: '25px 0',

    '& span': {
      display: 'inline-flex',
    },
  },

  subPrice: {
    fontSize: '16px',
  },

  tagsContainer: {
    minHeight: '112px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '& > h2': {
      fontSize: '16px',
      fontWeight: 400,
      textAlign: 'center',
      padding: '23px',
    },

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
  },

  tag: {
    display: 'inline-flex',
    margin: '1px',
    borderRadius: '30px',
    position: 'relative',
    backgroundColor: '#F1F7FB',
    color: '#636363',
    padding: '10px 20px',
  },

  link: {
    color: '#6FB7B0',
  },

  offer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6FB7B0',
    fontSize: '20px',
    padding: '20px 0',
    fontWeight: 600,

    '& > a': {
      width: '100%',
    },
  },

  btn: {
    height: '50px !important',
    width: '100% !important',
    background: '#fff',
    outline: 'none',
    border: '1px solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
    },
  },

  googlemap: {
    width: '100%',
    margin: '10px 0',
    fontSize: '22px',

    '& > img': {
      width: '100%',
      maxHeight: '345px',
    },
  },

  location: {
    display: 'flex',
    paddingBottom: '10px',

    '& > span': {
      paddingLeft: '10px',
      fontSize: '15px',
    },
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
    '& > div': {
      borderBottom: '1px solid #e1e1e1',
    },
  },

  audioContainer: {
    width: '100%',
    height: 'auto',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#eee',
    color: '#444',
    margin: '20px auto',
    overflow: 'hidden',

    '& > audio': {
      width: '100%',

      '&:nth-child(2), audio:nth-child(4), audio:nth-child(6)': {
        margin: 0,
      },
    },
  },

  loading: {
    position: 'absolute !important',
    left: '50% !important',
    top: '50% !important',
  },

  musicCard: {
    width: '100% !important',
    padding: '10px !important',
    boxShadow:
      '0 5px 10px rgba(0, 0, 0, .25), 0 2px 2px rgba(0, 0, 0, .22) !important',
  },

  sendOffer: {
    padding: '12px',
    background: 'aliceblue',
    borderRadius: '50px',
    border: '1px solid',
    transition: '.5s',

    '&:hover': {
      boxShadow: '0 5px 10px rgba(0, 0, 0, .25), 0 2px 2px rgba(0, 0, 0, .22)',
      transition: '.5s',
    },
  },
};
