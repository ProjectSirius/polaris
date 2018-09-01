const SET_ZOOM = 'SET_ZOOM';

const state = {
  zoom: 11,
};

const map = (state = state, action) => {
  switch (action.type) {
    case SET_ZOOM:
      return {
        ...state,
        zoom: action.payload.zoom,
      };

    default:
      break;
  }
};
