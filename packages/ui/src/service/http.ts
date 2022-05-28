const baseUrl = 'http://localhost:5000/api/';

export const getRequest = (path: string) => fetch(baseUrl + path).then((response) => response.json());

export const postRequest =
  <T>(path: string) =>
  (data: T) =>
    fetch(baseUrl + path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
