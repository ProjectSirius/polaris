import { ADD_TO_GROUP_OFFER } from '../actions/constants';

const groupOffer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_GROUP_OFFER:
      const addedItem = action.payload.selected;
      let count = 0;

      let arr = [...state, action.payload.selected];

      arr.forEach(el => {
        if (el.id === addedItem.id && el.value !== addedItem.value) {
          count++;
        }
      });

      return count === 1 ? arr.filter(el => el.id !== addedItem.id) : arr;
    default:
      return state;
  }
};

export default groupOffer;
