import Cookies from 'js-cookie';

const baseUrl = 'http://localhost:5000/api/';

export const getRequest = (path: string) =>
  fetch(baseUrl + path, {
    method: 'GET',
    headers: { authorization: Cookies.get('jwtToken') || '' },
  }).then((response) => response.json());

export const postRequest = <T>(path: string, data: T) =>
  fetch(baseUrl + path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: Cookies.get('jwtToken') || '',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
