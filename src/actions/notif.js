import { NOTIF_SUCCESS } from './constants';
import axios from 'axios';

const notifReceive = data => ({
  type: NOTIF_SUCCESS,
  payload: { data },
});

const getNotif = () => dispatch => {
  return axios
    .get('https://jsonplaceholder.typicode.com/comments')
    .then(payload => dispatch(notifReceive(payload.data)));
};

export default getNotif;
