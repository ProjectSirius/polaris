const tags = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TAG':
      return [...state, action.payload.tags];
    case 'REMOVE_TAG':
      return [...action.payload.tags];
    default:
      return state;
  }
};

export default tags;
