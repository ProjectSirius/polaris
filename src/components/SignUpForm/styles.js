export default {
  signUpForm: {
    position: 'relative',
    display: 'flex',
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
};
