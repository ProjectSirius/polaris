// delete user data

import {
  DATA_DELETE_FAILURE,
  DATA_DELETE_REQUEST,
  DATA_DELETE_SUCCESS,
} from './constants';
import { doDelete } from '../api/request';

const dataDeleteRequest = isRequesting => ({
  type: DATA_DELETE_REQUEST,
  payload: { isRequesting },
});

const dataDeleteSuccess = (id, data) => ({
  type: DATA_DELETE_SUCCESS,
  payload: { id, data },
});

const dataDeleteFailure = error => ({
  type: DATA_DELETE_FAILURE,
  payload: { error },
});

const deleteData = id => (dispatch, getState) => {
  const url = {
    audience_owner: `channels/${id}`,
    content_owner: `contents/${id}`,
  };

  const selector = getState().currentUser.type;

  doDelete(url[selector])
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(dataDeleteSuccess(id, getState().userData));
    })
    .catch(error => dispatch(dataDeleteFailure(error)));

  dataDeleteRequest(true);
};

export default deleteData;
