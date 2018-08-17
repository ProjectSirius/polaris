export default {
  newChannelWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '40px',
    width: '100%',

    '& > div': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
    },
  },

  titleWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '10px solid #ea585f',
  },

  title: {
    fontSize: '32px',
    padding: '18px',
  },

  form: {
    marginTop: '10px',
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

    '& > div': {
      padding: '0 5px',
    },
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
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  tag: {
    display: 'inline-block',
    padding: '2px',
    margin: '2px 0',
    background: '#FFF',
    border: '1px solid #CCC',
    width: '16em',
    font: 'inherit',
    borderRadius: '2px',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .1)',

    '&:focus': {
      borderColor: '#59F',
      outline: 'none',
    },
  },
};
