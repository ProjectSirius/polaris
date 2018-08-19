import {
  DATA_SEND_REQUEST,
  DATA_SEND_SUCCESS,
  DATA_SEND_FAILURE,
} from './constants';

import post from '../helpers/axiosPost';

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
  const tags = getState().tags;

  const url = {
    createChannel: 'https://acampapi.haffollc.com/v1/channels',
    createContent: 'https://acampapi.haffollc.com/v1/content',
  };

  post(url[selector], tags ? { ...data, tags } : data)
    .then(data => dispatch(dataSendSuccess(data)))
    .catch(error => dispatch(dataSendFailure(error)));

  dataSendRequest(true);
};

export default sendData;
