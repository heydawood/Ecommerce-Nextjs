import axios from 'axios';
import { TOKEN_KEY } from '../Utils/Constants';
import { attachInterceptor } from './InterceptorManager';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem(TOKEN_KEY) : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    // On success, return the response
    return response;
  },
  (error) => {
    // Only handle errors
    console.error('API Error Details:', {
      status: error?.response?.status,
      statusText: error?.response?.statusText,
      data: error?.response?.data,
      message: error?.message,
      url: error?.config?.url,
    });

    const status = error?.response?.status;
    const data = error?.response?.data;

    if (status === 401) {
      console.error('Token expired or unauthorized');
    }

    // Return error with proper structure
    return Promise.reject({
      status,
      data,
      message: data?.message || error?.message || 'An error occurred',
      systemErrorCode: data?.systemErrorCode,
    });
  },
);

// Attach dynamic interceptor logic
export const setupInterceptor = (dispatch: any, navigate: any) => {
  attachInterceptor(dispatch, navigate);
};

export default api;