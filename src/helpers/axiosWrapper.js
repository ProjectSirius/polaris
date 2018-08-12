import axios from 'axios';

const requestCreator = () => {
  let call;
  return url => {
    if (call) {
      call.cancel();
    }
    call = axios.CancelToken.source();
    return axios.get(url, {
      cancelToken: call.token,
    });
  };
};

export default requestCreator();
