import {
  DATA_EDIT_FAILURE,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_REQUEST,
} from './constants';
import { doPatch } from '../api/request';

export const editRequest = () => ({
  type: DATA_EDIT_REQUEST,
});

const editSuccess = (data, item) => ({
  type: DATA_EDIT_SUCCESS,
  payload: {
    data,
    item,
  },
});

const editFailure = () => ({
  type: DATA_EDIT_FAILURE,
});

const editData = item => (dispatch, getState) => {
  const url = {
    audience_owner: `channels/${item.id}`,
    content_owner: `contents/${item.id}`,
  };

  const selector = getState().currentUser.type;

  doPatch(url[selector], {
    title: item.title,
    description: item.description,
    price: item.price,
  })
    .then(item => {
      if (item.error) {
        throw new Error(item.error);
      }

      return dispatch(editSuccess(getState().userData, item));
    })
    .catch(error => dispatch(editFailure(error)));

  editRequest(true);
};

export default editData;
