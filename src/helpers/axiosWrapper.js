import axios from 'axios';

const get = () => {
  let call;
  return (url, data) => {
    if (call) {
      call.cancel();
    }
    call = axios.CancelToken.source();
    return axios.get(url, {
      data,
      cancelToken: call.token,
    });
  };
};

export default get();
