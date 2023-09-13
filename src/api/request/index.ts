import { useEnv } from '@/hooks/env';
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';
import axios from 'axios';
const { VITE_BASE_API } = useEnv();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: VITE_BASE_API ? VITE_BASE_API : 'http://localhost:8080',
  timeout: 10 * 1000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});
axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // 这里可以设置token: config!.headers!.Authorization = token
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // ...其他代码
    const data = response.data;
    if (data.code === 200) {
      return data;
    } else {
      return Promise.reject(data);
    }
  },
  (err) => {
    // ...其他代码
    return Promise.reject(err.response);
  }
);
const request = <T = unknown>(method = 'GET', url: string, data?: object): Promise<T> => {
  return new Promise((resolve, reject) => {
    axiosInstance({ method, url, ...data })
      .then((res) => {
        resolve(res as unknown as Promise<T>);
      })
      .catch((e: Error | AxiosError) => {
        reject(e);
      });
  });
};

export const get = <T = unknown>(url: string, data?: unknown): Promise<T> => {
  return request('GET', url, { params: data });
};

export const post = <T = unknown>(url: string, data?: unknown): Promise<T> => {
  return request('POST', url, { data });
};

export const put = <T = unknown>(url: string, data?: unknown): Promise<T> => {
  return request('PUT', url, { data });
};

export const deleteThis = <T = unknown>(url: string, data?: object): Promise<T> => {
  return request('DELETE', url, { params: data });
};
