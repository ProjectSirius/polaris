export default {
  cardWrapper: {
    width: '30%',
    maxWidth: '400px',
    margin: '15px 0',
  },

  card: {
    position: 'relative',
    height: '518px',
    backgroundColor: '#fff',
  },

  img: {
    height: '270px',
    width: '100%',
  },

  imgModal: {
    cursor: 'pointer',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: '270px',
    backgroundColor: '#202121',
    opacity: '0',
    transition: 'all .5s',

    '&:hover': {
      opacity: '.5',
    },
  },

  title: {
    fontSize: '16px',
    fontWeight: '700',
  },

  content: {
    padding: '10px 20px',
    color: '#000',
  },

  countryTime: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0',
    fontWeight: '400',
    textDecoration: 'italic',
    fontStyle: 'italic',
    color: '#777',
  },

  description: {
    padding: '20px 0',
    borderBottom: '1px solid #e5e5e5',
    borderTop: '1px solid #e5e5e5',
  },

  descriptionText: {
    height: '65px',
    overflow: 'hidden',
  },

  tags: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',

    '& > span': {
      margin: '0 3px',
    },
  },

  icon: {
    color: '#fff',
    padding: '10px',
    paddingBottom: '5px',
    margin: '15px',
    border: '1px solid #fff',
    borderRadius: '50%',

    '&:hover': {
      borderColor: '#e5e5e5',
      color: '#e5e5e5',
    },

    '& > a:hover': {
      textDecoration: 'none',
      color: '#e5e5e5',
    },
  },
};
