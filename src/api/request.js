import store from '../store';

const API_ROOT = 'https://acampapi.haffollc.com/v1';

export function request(url, method, body = null) {
  const authToken = store.getState().authToken;
  const fetchData = {
    method,
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
  };

  if (authToken) {
    fetchData.headers.Authorization = 'Bearer ' + authToken;
  }
  if (body) {
    fetchData.body = JSON.stringify(body);
  }
  return fetch(`${API_ROOT}/${url}`, fetchData).then(res => res.json());
}

export function doGet(url) {
  return request(url, 'GET');
}
export function doPost(url, body = null) {
  return request(url, 'POST', body);
}
export function doPut(url, body = null) {
  return request(url, 'PUT', body);
}
export function doPatch(url, body = null) {
  return request(url, 'PATCH', body);
}
export function doDelete(url, body = null) {
  return request(url, 'DELETE', body);
}
