import {
  DATA_EDIT_FAILURE,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_REQUEST,
} from './constants';
import { doPatch } from '../api/request';

export const editRequest = () => ({
  type: DATA_EDIT_REQUEST,
});

const editSuccess = () => ({
  type: DATA_EDIT_SUCCESS,
});

const editFailure = () => ({
  type: DATA_EDIT_FAILURE,
});

const editData = (data, selector) => (dispatch, getState) => {
  const url = {
    createChannel: 'channels',
    createContent: 'contents',
  };

  doPatch(url[selector], {
    title: data.title,
    description: data.description,
    price: data.price,
  })
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(editSuccess(data));
    })
    .catch(error => dispatch(editFailure(error)));

  editRequest(true);
};

export default editData;
