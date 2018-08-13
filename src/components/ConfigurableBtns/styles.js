export default {
  configurable: {
    display: 'flex',
    marginBottom: 0,
    heigth: '53px',
    padding: 0,
    marginLeft: '10px',
  },

  listItem: {
    listStyle: 'none',
    display: 'inline-flex',
    background: '#fff',
    height: '53px',
    justifyContent: 'center',
    width: '33.3%',
    alignItems: 'center',
    border: '1px solid rgb(204, 204, 204)',
    cursor: 'pointer',
    transition: 'all .5s',

    '&:hover': {
      background: '#333',
      color: '#fff',
    },

    '&:active': {
      background: '#333',
      color: '#fff',
    },

    '&:nth-child(n + 2)': {
      borderLeft: 'none',
    },
  },

  listItemActive: {
    background: '#333',
    color: '#fff',
  },
};
