export default {
  card: {
    width: '100% !important',
    height: '100%',
    maxHeight: '506px',
    display: 'flex',
    boxShadow: '10px 5px 40px 20px rgba(0, 0, 0, .1)',
    transition: '.25s',
    backgroundColor: '#f4f7f6',
    textDecoration: 'none !important',

    '&:hover': {
      boxShadow: '10px 5px 40px 20px rgba(0, 0, 0, .2)',
      cursor: 'pointer',
      textDecoration: 'none !important',
    },

    '&:hover button': {
      transform: 'translate(10px, 0)',
    },
  },

  cardList: {
    flexDirection: 'row',
    width: '100%',
    height: 'auto',
  },

  cardHeader: {
    height: '150px',
    width: '100%',
    padding: '15px',
    backgroundImage: 'url(https://source.unsplash.com/user/erondu/600x400)',
    backgroundSize: 'cover',
    color: '#fff',
  },

  cardHeaderList: {
    height: 'auto',
    width: 'auto',
  },

  cardHeaderTitle: {
    textTransform: 'uppercase',
    margin: '0',
    fontWeight: '300',
  },

  mainTitle: {
    margin: '15px 0',
    fontWeight: '600',
  },

  cardBody: {
    padding: '15px',
    backgroundColor: '#f4f7f6',
    width: '100%',
  },

  date: {
    fontSize: '10px',
    fontWeight: 500,
    color: 'grey',
  },

  bodyContent: {
    fontSize: '13px',
    lineHeight: 1.8,
  },

  buttonPrimary: {
    border: 'none',
    boxShadow: 'none',
    fontFamily: 'inherit',
    backgroundColor: 'transparent',
    color: 'blue',
    padding: '15px',
    marginTop: 'auto',
    fontSize: '15px',
    transition: '.25s',
    textAlign: 'left',
  },

  designerLink: {
    color: '#fff',
    textAlign: 'center',
    fonSize: '12px',
    textDecoration: 'none',
    display: 'block',
  },
};
