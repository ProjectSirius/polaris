export default {
  submitWrapper: {
    '& > button': {
      backgroundColor: '#49c5b6',
      textAlign: 'center',
      fontSize: '15px',
      border: 'none',
      height: '60px',
      padding: '0 35px',
      fontWeight: '600',
      cursor: 'pointer',
      color: '#fff',
      borderRadius: '0',

      '&:hover': {
        backgroundColor: '#42ab9e',
        color: '#fff',
      },

      '&:focus': {
        backgroundColor: '#42ab9e',
        color: '#fff',
      },

      '&:disabled:hover': {
        backgroundColor: '#42ab9e',
        color: '#fff',
      },

      '&:active': {
        backgroundColor: '#349287',
        color: '#fafafa',
      },

      '&:active:focus': {
        backgroundColor: '#349287',
        color: '#fafafa',
      },
    },
  },
};
