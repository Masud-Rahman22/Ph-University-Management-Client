import {
    BaseQueryApi,
    BaseQueryFn,
    DefinitionType,
    FetchArgs,
    createApi,
    fetchBaseQuery,
  } from '@reduxjs/toolkit/query/react';
  import { logout, setUser } from '../features/auth/authSlice';
import { RootState } from '../features/store';
import { toast } from 'sonner';
  
  const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
  
      if (token) {
        headers.set('authorization', `${token}`);
      }
  
      return headers;
    },
  });
  
  const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    BaseQueryApi,
    DefinitionType
  > = async (args, api, extraOptions): Promise<any> => {
    let result = await baseQuery(args, api, extraOptions);

    if(result?.error?.status === 404){
      toast.error(result?.error?.data?.message)
    }
  
    if (result?.error?.status === 401) {
      //* Send Refresh
      console.log('Sending refresh token');
  
      const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
        method: 'POST',
        credentials: 'include',
      });
  
      const data = await res.json();
      console.log(data.data)
  
      if (data?.data) {
        const user = (api.getState() as RootState).auth.user;
  
        api.dispatch(
          setUser({
            user,
            token: data.data,
          })
        );
  
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logout());
        console.log('logout')
      }
    }
  
    return result;
  };
  
  export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
  });