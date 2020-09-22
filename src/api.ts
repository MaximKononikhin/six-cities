import axios from 'axios';
import { ENTRY_POINT } from './utils/constants';



export const createAPI = () => {
  const api = axios.create({
    baseURL: ENTRY_POINT
  });

  // const onSuccess = (response: AxiosResponse) => {
  //   return response;
  // };

  // const onError = (err: AxiosError) => {
  //   const {response} = err;

  //   if (response.status === Error.UNAUTHORIZED) {
  //     onUnauthorized();
  //     throw err;
  //   }

  //   throw err;
  // };

  // api.interceptors.response.use(onSuccess, onError);
  return api;
};