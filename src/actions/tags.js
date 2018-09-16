const add = tags => ({
  type: 'ADD_TAG',
  payload: {
    tags,
  },
});

const removeTag = tags => ({
  type: 'REMOVE_TAG',
  payload: {
    tags,
  },
});

const deleteAllTags = () => ({
  type: 'DELETE_ALL_TAGS',
});

const addTags = tags => dispatch => {
  dispatch(add(tags));
};

const removeTags = id => (dispatch, getState) => {
  const tags = getState().tags;
  const newTags = tags.filter(tag => tag.id !== id);
  dispatch(removeTag(newTags));
};

export { addTags, removeTags, deleteAllTags };
