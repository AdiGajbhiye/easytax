import history from 'history/browser';
import { authService, getAccessToken, isUserLoggedIn } from './auth';

const baseUrl = 'http://localhost:5000/api/';

const getHeaders = (): HeadersInit => {
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (isUserLoggedIn()) {
    headers.authorization = getAccessToken();
  }
  return headers;
};

const authorizationHook = (response: Response) => {
  if (response.status === 401) {
    authService.send('LOGOUT');
    history.replace('/login');
    throw new Error('Unauthorize');
  }
  return response;
};

export const getRequest = (path: string) =>
  fetch(baseUrl + path, {
    method: 'GET',
    headers: getHeaders(),
  })
    .then(authorizationHook)
    .then((response) => response.json());

export const postRequest = <T>(path: string, data: T) =>
  fetch(baseUrl + path, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  })
    .then(authorizationHook)
    .then((response) => response.json());
