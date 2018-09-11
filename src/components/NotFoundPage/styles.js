export default {
  '@global #root, .App': {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  '@global body': {
    color: '#fff',
    background: '#5ebba6',
    fontFamily: "'Open Sans', sans-serif",
    maxHeight: '700px',
    overflow: 'hidden',
  },
  container: {
    width: '68%',
    zIndex: 10000,
  },

  c: {
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    width: '80%',
    margin: '100px auto',
  },

  _404: {
    fontSize: '220px',
    position: 'relative',
    display: 'inline-block',
    zIndex: '2',
    height: '250px',
    letterSpacing: '15px',
    lineHeight: '250px',
  },

  _1: {
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    letterSpacing: '12px',
    fontSize: '4em',
    lineHeight: '80%',
    zIndex: 1000,
  },

  _2: {
    textAlign: 'center',
    display: 'block',
    position: 'relative',
    fontSize: '20px',
    padding: '10px 0',
  },

  text: {
    fontSize: '70px',
    textAlign: 'center',
    position: 'relative',
    display: 'inline-block',
    margin: '19px 0px 0px 0px',
    zIndex: '3',
    width: '100%',
    lineHeight: '1.2em',
  },

  btn: {
    backgroundColor: 'rgb( 255, 255, 255 )',
    position: 'relative',
    display: 'inline-block',
    width: '86%',
    marginTop: '10px',
    padding: '16px',
    zIndex: '5',
    fontSize: '25px',
    margin: '0 auto',
    color: '#5ebba6',
    textDecoration: 'none',
    marginRight: '10px',

    '&:hover': {
      color: '#5ebba6',
    },
  },

  right: {
    float: 'right',
    width: '60%',
  },

  hr: {
    padding: '0',
    border: 'none',
    borderTop: '5px solid #fff',
    color: '#fff',
    textAlign: 'center',
    margin: '0px auto',
    width: '420px',
    height: '10px',
    zIndex: '-10',

    '&:after': {
      content: '""',
      display: 'inline-block',
      position: 'relative',
      top: '-0.75em',
      fontSize: '2em',
      padding: '0 0.2em',
      background: '#33cc99',
    },
  },

  cloud: {
    width: '350px',
    height: '120px',
    background: '-o-linear-gradient(top, #FFF 100%)',
    borderRadius: '100px',
    WebkitBorderRadius: '100px',
    MozBorderRadius: '100px',
    position: 'absolute',
    margin: '120px auto 20px',
    zIndex: '-1',
    transition: 'ease 1s',

    '&:after': {
      content: "''",
      position: 'absolute',
      background: '#FFF',
      zIndex: '-1',
      width: '100px',
      height: '100px',
      top: '-50px',
      left: '50px',
      borderRadius: '100px',
      WebkitBorderRadius: '100px',
      MozBorderRadius: '100px',
    },

    '&:before': {
      content: "''",
      position: 'absolute',
      background: '#FFF',
      zIndex: '-1',
      width: '180px',
      height: '180px',
      top: '-90px',
      right: '50px',
      borderRadius: '200px',
      WebkitBorderRadius: '200px',
      MozBorderRadius: '200px',
    },
  },

  x1: {
    top: '-50px',
    left: '100px',
    WebkitTransform: 'scale(0.3)',
    MozTransform: 'scale(0.3)',
    transform: 'scale(0.3)',
    opacity: '0.9',
    WebkitAnimation: 'moveclouds 15s linear infinite',
    MozAnimation: 'moveclouds 15s linear infinite',
    OAnimation: 'moveclouds 15s linear infinite',
  },

  x1_5: {
    top: '-80px',
    left: '250px',
    WebkitTransform: 'scale(0.3)',
    MozTransform: 'scale(0.3)',
    transform: 'scale(0.3)',
    WebkitAnimation: 'moveclouds 17s linear infinite',
    MozAnimation: 'moveclouds 17s linear infinite',
    OAnimation: 'moveclouds 17s linear infinite',
  },

  x2: {
    left: '250px',
    top: '30px',
    WebkitTransform: 'scale(0.6)',
    MozTransform: 'scale(0.6)',
    transform: 'scale(0.6)',
    opacity: '0.6',
    WebkitAnimation: 'moveclouds 25s linear infinite',
    MozAnimation: 'moveclouds 25s linear infinite',
    OAnimation: 'moveclouds 25s linear infinite',
  },

  x3: {
    left: '250px',
    bottom: '-70px',
    WebkitTransform: 'scale(0.6)',
    MozTransform: 'scale(0.6)',
    transform: 'scale(0.6)',
    opacity: '0.8',
    WebkitAnimation: 'moveclouds 25s linear infinite',
    MozAnimation: 'moveclouds 25s linear infinite',
    OAnimation: 'moveclouds 25s linear infinite',
  },

  x4: {
    left: '470px',
    botttom: '20px',
    WebkitTransform: 'scale(0.75)',
    MozTransform: 'scale(0.75)',
    transform: 'scale(0.75)',
    opacity: '0.75',
    WebkitAnimation: 'moveclouds 18s linear infinite',
    MozAnimation: 'moveclouds 18s linear infinite',
    OAnimation: 'moveclouds 18s linear infinite',
  },

  x5: {
    left: '200px',
    top: '300px',
    WebkitTransform: 'scale(0.5)',
    MozTransform: 'scale(0.5)',
    transform: 'scale(0.5)',
    opacity: '0.8',
    WebkitAnimation: 'moveclouds 20s linear infinite',
    MozAnimation: 'moveclouds 20s linear infinite',
    OAnimation: 'moveclouds 20s linear infinite',
  },

  '@keyframes moveclouds': {
    from: { marginLeft: '1000px' },
    to: { marginLeft: '-1000px' },
  },
};
