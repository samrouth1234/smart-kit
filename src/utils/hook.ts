// import axios, { AxiosInstance ,AxiosError } from 'axios';
// import { useEffect, useRef } from 'react';
// import { useAuth } from 'react-oidc-context';
// import { NavigateFunction } from "react-router-dom";

// import { baseURL,SOMETHING_WENT_WRONG } from '~constants/Routes';

// const API_BASE_URL =
//   process.env.NODE_ENV === "development"
//     ? process.env.REACT_APP_API_BASE_URL
//     : window.origin + "/v1";

// export class HttpError extends Error {
//   code: number;
//   constructor(message: string, code: number) {
//     super(message);
//     this.code = code;
//   }
// }

// // Create own axios instance with defaults.
// export const ApiService = axios.create({
//   withCredentials: true,
//   baseURL: API_BASE_URL,
// });

// export const setupResponseInterceptor = (navigate: NavigateFunction) => {
//   ApiService.interceptors.response.use(
//     (response) => response,
//     (error: AxiosError) => {
//       if (
//         error.response?.status &&
//         [400, 403, 404, 405, 415, 500, 502, 503, 504].includes(
//           error.response.status
//         )
//       ) {
//         navigate(SOMETHING_WENT_WRONG, {
//           state: { code: error.response.status },
//         });
//       } else {
//         return Promise.reject(error);
//       }
//     }
//   );
// };

// export const useAxios = () => {
//   const axiosInstance = useRef<AxiosInstance | undefined>(); 
//   const auth = useAuth();
//   const keyCloak_token = auth.user?.access_token ?? '';
//   axios.defaults.headers['Authorization'] = `Bearer ${keyCloak_token}`;
//   axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//   axios.defaults.headers.common['Cache-Control'] = 'no-cache';
//   axios.defaults.headers.common['Accept'] = 'application/json';
//   axios.defaults.headers.post['Content-Type'] = 'application/json';
//   axios.defaults.baseURL = baseURL();

//   useEffect(() => {
//     axiosInstance.current = axios.create({
//       withCredentials: false,
//       headers: {
//         Authorization: keyCloak_token ? `Bearer ${keyCloak_token}` : undefined,
//       }
//     });
//     axiosInstance.current.defaults.headers.common['Accept'] ='application/json,';
//     axiosInstance.current.defaults.headers.post['Content-Type'] ='application/json';
//     axiosInstance.current.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//     axiosInstance.current.defaults.headers.common['Cache-Control'] = 'no-cache';
//     axiosInstance.current.defaults.baseURL = baseURL();
//   }, [keyCloak_token, auth]);

//   return axiosInstance;
// }
