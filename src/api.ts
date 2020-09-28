import axios, { AxiosError, AxiosResponse } from 'axios';
import { ENTRY_POINT } from './utils/constants';



export const createAPI = (onUnauthorized: () => void) => {
  const api = axios.create({
    baseURL: ENTRY_POINT
  });

  const onSuccess = (response: AxiosResponse) => {
    return response;
  };

  const onError = (err: AxiosError) => {
    const {response} = err;

    if (response?.status === 401) {
      onUnauthorized();
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);
  return api;
};