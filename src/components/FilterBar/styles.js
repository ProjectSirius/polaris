export default {
  container: {
    display: 'flex',
  },

  filterBar: {},

  filterHeading: {
    fontSize: '22px',
    display: 'flex',
    width: '100%',
  },

  filterHeadingTitle: {
    marginLeft: '11px',
  },

  filterWrapper: {
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    borderBottom: '1px solid rgba(206, 197, 197, .6)',
  },

  filterTitle: {
    fontSize: '20px',
    padding: '20px 0',
  },

  filterTitleWithIcon: {
    display: 'flex',
    alignItems: 'center',
  },

  'row-wrapper': {
    display: 'flex',
    margin: 0,
    padding: '10px',
  },

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

  searchRow: {
    display: 'flex',
    padding: 0,
    margin: 0,
    '& > div': {
      padding: 0,
      margin: 0,
    },
  },

  column: {
    padding: 0,
    margin: 0,
  },

  'right-column': {
    marginLeft: '15px',
  },
};
