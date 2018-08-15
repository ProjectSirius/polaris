import { ADD_FILTER } from '../actions/constants';

const visibilityFilters = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER:
      let arr = [
        ...state,
        {
          id: action.payload.filter.id,
          filterName: action.payload.filter.filterName,
          value: action.payload.filter.value,
        },
      ];
      /*
       *Removing dupilicates so that the nth index is always left
       *with reduce we group the array into an object using the name
       *as the key then Object.values to convert back the object into
       *an array.
     */
      return Object.values(
        arr.reduce((acc, el) => Object.assign(acc, { [el.filterName]: el }), {})
      );

    default:
      return state;
  }
};

export default visibilityFilters;
