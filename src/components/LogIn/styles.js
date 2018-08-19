export default {
  loginFormWrapper: {
    position: 'relative',
    display: 'flex',
    flexShrink: '1',
    flexBasis: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '72px 48px',

    '& span': {
      color: '#bd2b22',
    },
  },

  loginForm: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '& > form': {
      width: '80%',

      '@media screen and (min-width: 900px)': {
        width: '450px',
      },
    },
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
      color: '#337ab7 !important',
      fontWeight: '700',

      '&:hover': {
        textDecoration: 'underline !important',
      },
    },
  },
};
