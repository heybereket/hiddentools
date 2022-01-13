import { BASE_URL } from './constants';

export const fetcher = async (url: string, init: Partial<RequestInit> = {}) => {
  return await fetch(`${BASE_URL}/api/${url}`, {
    mode: 'cors',
    ...init,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  }).then((res) => res.json());
};
