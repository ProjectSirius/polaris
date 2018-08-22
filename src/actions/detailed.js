import { DETAILS_RECEIVE_SUCCESS } from './constants';
import get from '../helpers/axiosWrapper';
import { dataRequest, dataReceiveFailure } from '../helpers/dataRequests';

const dataInfoReceiveSuccess = data => ({
  type: DETAILS_RECEIVE_SUCCESS,
  payload: { data },
});

const getDetails = (dataType, id) => dispatch => {
  let url = `https://my-json-server.typicode.com/angela0202/fake-db/${dataType}/${id}`;
  dispatch(dataRequest(true));

  return get(url)
    .then(payload => dispatch(dataInfoReceiveSuccess(payload.data)))
    .catch(err => dispatch(dataReceiveFailure(err)));
};

export default getDetails;
