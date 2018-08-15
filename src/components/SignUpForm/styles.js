export default {
  signUpForm: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: '1',
    flexBasis: '100%',
    justifyContent: 'center',
    padding: '72px 48px',

    '& > form': {
      width: '80%',

      '@media screen and (min-width: 900px)': {
        width: '450px',
      },
    },

    '& span': {
      color: '#bd2b22',
    },
  },

  signUpTitle: {
    textAlign: 'center',
    fontSize: '36px',
    margin: '0 0 20px 0',
  },

  hiddenInput: {
    display: 'none',
  },

  input: {
    display: 'block',
    height: '60px',
    padding: '0 15px',
    background: '#fff',
    border: '1px solid #dbe0df',
    borderRadius: '0',
  },

  inputContainer: {
    position: 'relative',
  },

  signUpDesc: {
    width: '80%',
    marginTop: '40px',
    padding: '15px 20px',
    textAlign: 'center',
    border: '1px solid #d8dee2',
    borderRadius: 5,
    fontSize: '16px',

    '& a': {
      color: '#337ab7',
    },

    '@media screen and (min-width: 900px)': {
      width: '450px',
    },
  },
};
