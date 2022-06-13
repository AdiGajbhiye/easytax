import { getAccessToken, isUserLoggedIn } from './auth';

const baseUrl = 'http://localhost:5000/api/';

const getHeaders = (): HeadersInit => {
  const headers: HeadersInit = { 'Content-Type': 'application/json' };
  if (isUserLoggedIn()) {
    headers.authorization = getAccessToken();
  }
  return headers;
};

export const getRequest = (path: string) =>
  fetch(baseUrl + path, {
    method: 'GET',
    headers: getHeaders(),
  }).then((response) => response.json());

export const postRequest = <T>(path: string, data: T) =>
  fetch(baseUrl + path, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  }).then((response) => response.json());
