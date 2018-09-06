import {
  DATA_EDIT_FAILURE,
  DATA_EDIT_SUCCESS,
  DATA_EDIT_REQUEST,
  DATA_EDIT_REDIRECT,
} from './constants';
import { doPatch } from '../api/request';

export const editRedirect = () => ({
  type: DATA_EDIT_REDIRECT,
});

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
    fields: [
      {
        idField: 1,
        value: 'Musical theatre',
      },
      {
        idField: 16,
        value: item.price,
      },
      {
        idField: 21,
        value: item.url,
      },
      {
        idField: 22,
        value: item.videoUrl,
      },
      {
        idField: 23,
        value: item.imgUrl,
      },
      {
        idField: 25,
        value: item.perUnit,
      },
      {
        idField: 26,
        value: item.unit,
      },
    ],
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
