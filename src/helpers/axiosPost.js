import axios from 'axios';

const post = () => {
  let call;
  return (url, data) => {
    if (call) {
      call.cancel();
    }
    call = axios.CancelToken.source();
    return axios.post(url, {
      data,
      cancelToken: call.token,
    });
  };
};

export default post();
