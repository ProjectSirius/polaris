export default {
  newChannelWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  title: {
    fontSize: '35px',
    padding: '32px',
  },

  form: {
    width: '70%',
  },

  inputFiled: {
    width: '100%',
  },

  textarea: {
    height: '120px !important',
  },

  minAndMaxPrice: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  uploadBtnWrapper: {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',

    '& > input[type=file]': {
      fontSize: '32px',
      position: 'absolute',
      left: 0,
      top: 0,
      opacity: 0,
      width: '170px',
    },
  },

  btn: {
    border: '2px solid gray',
    color: 'gray',
    backgroundColor: 'white',
    padding: '8px 20px',
    borderRadius: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
