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

const dataSendSuccess = data => ({
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
    description: data.briefDescription,
    fields: [
      {
        idField: 1,
        value: 'Musical theatre',
      },
    ],
  })
    .then(data => dispatch(dataSendSuccess(data)))
    .catch(error => dispatch(dataSendFailure(error)));

  dataSendRequest(true);
};

export default sendData;
