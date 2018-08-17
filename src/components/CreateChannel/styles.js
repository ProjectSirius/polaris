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

  tags: {
    '& .control-label': {
      width: '100%',

      '& > .react-tags': {
        display: 'flex',

        '& > .react-tags__container': {
          listStyle: 'none',
          display: 'flex',
          padding: 0,

          '& li': {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '3px',
            background: '#ea585f',
            margin: '2px',
            fontWeight: 600,
            borderRadius: '20px',
            overflow: 'hidden',
            height: '27px',
            position: 'relative',
            color: '#fff',
            minWidth: '80px',

            '& a': {
              width: '24%',
              justifyContent: 'center',
              display: 'flex',
              background: '#a94442',
              marginLeft: '5px',
              color: '#fff',
              height: '32px',
              position: 'absolute',
              right: 0,
              top: '-3px',
              lineHeight: '33px',
              textDecoration: 'none',
              cursor: 'pointer',
              fontSize: '18px',
            },
          },
        },

        '& input[type="text"]': {
          fontWeight: 400,
          display: 'block',
          width: '100%',
          height: '34px',
          padding: '6px 12px',
          fontSize: '14px',
          lineHeight: '1.42857143',
          color: '#555',
          backgroundColor: '#fff',
          backgroundImage: 'none',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
          transition:
            'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
          WebkitBoxShadow: 'inset 0 1px 1px rgba(0, 0, 0, .075)',
          WebkitTransition:
            'border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s',
          OTransition:
            'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
        },
      },
    },
  },
};
