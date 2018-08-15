export default {
  loginFormWrapper: {
    position: 'relative',
    display: 'flex',
    flexShrink: '1',
    flexBasis: '100%',
    justifyContent: 'center',
    padding: '72px 48px',
    flexDirection: 'column',

    '& span': {
      color: '#bd2b22',
    },
  },

  loginForm: {
    width: '50%',
    margin: '0 auto',
    minWidth: '250px',
    maxWidth: '550px',
  },

  loginTitle: {
    textAlign: 'center',
    margin: '0 0 20px 0',
    fontSize: '36px',
  },

  signUpDesc: {
    marginTop: '40px',
    padding: '15px 20px',
    textAlign: 'center',
    border: '1px solid #d8dee2',
    borderRadius: 5,
    fontSize: '16px',

    '& a': {
      color: '#337ab7',
    },
  },
};
