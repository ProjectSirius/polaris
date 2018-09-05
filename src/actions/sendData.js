import {
  DATA_SEND_REQUEST,
  DATA_SEND_SUCCESS,
  DATA_SEND_FAILURE,
} from './constants';
import { doPost } from '../api/request';

const dataSendRequest = isRequesting => ({
  type: DATA_SEND_REQUEST,
  payload: { isRequesting },
});

export const dataSendSuccess = data => ({
  type: DATA_SEND_SUCCESS,
  payload: { data },
});

const dataSendFailure = error => ({
  type: DATA_SEND_FAILURE,
  payload: { error },
});

const sendData = (data, selector) => (dispatch, getState) => {
  const url = {
    createChannel: 'channels',
    createContent: 'contents',
  };

  doPost(url[selector], {
    title: data.title,
    description: data.description,
    fields: [
      {
        idField: 1,
        value: 'Musical theatre',
      },
      {
        idField: 16,
        value: data.price,
      },
    ],
  })
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }

      return dispatch(dataSendSuccess(data.user));
    })
    .catch(error => dispatch(dataSendFailure(error)));

  dataSendRequest(true);
};

export default sendData;
