import { NOTIF_SUCCESS } from './constants';
import get from '../helpers/axiosWrapper';

const notifReceive = data => ({
  type: NOTIF_SUCCESS,
  payload: { data },
});

const getNotif = () => dispatch => {
  return get('https://jsonplaceholder.typicode.com/comments').then(payload =>
    dispatch(notifReceive(payload.data))
  );
};

export default getNotif;