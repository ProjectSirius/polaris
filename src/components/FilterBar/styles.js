export default {
  filterHeading: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    border: '1px solid rgba(206, 197, 197, .6)',
    borderRadius: '5px',
    fontSize: '20px',
    fontWeight: '700',
    cursor: 'pointer',
  },

  filterHeadingTitle: {
    marginLeft: '11px',
  },

  filterItems: {
    border: '1px solid rgba(206, 197, 197, .6)',
    borderRadius: '5px',
  },

  filterItem: {
    padding: '30px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    borderBottom: '1px solid rgba(206, 197, 197, .6)',
  },

  filterTitle: {
    marginBottom: '15px',
    fontSize: '20px',
    fontWeight: '500',
    textTransform: 'uppercase',
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

  '@media screen and (max-width: 640px)': {
    filterWrapper: {
      width: '100%',
    },
  },
};
