const addTags = tags => ({
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

const removeTags = (tag, index) => (dispatch, getState) => {
  const tags = getState().tags;
  const newTags = tags.filter((tag, i) => i !== index);
  dispatch(removeTag(newTags));
};

export { addTags, removeTags };
