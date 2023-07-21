import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { useUser } from "./../users/providers/UserProvider";
import { useSnack } from "../context/SnackbarProvider";

export default function useAxios() {
  const snack = useSnack();
  const { token } = useUser();

  useEffect(() => {
    // Set the default "x-auth-token" header for all requests
    axios.defaults.headers.common["x-auth-token"] = token;

    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Add "x-auth-token" to the headers for each request if token is available
        if (token) {
          config.headers["x-auth-token"] = token;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: AxiosError) => {
        if (error.message) snack("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      // Remove the interceptors when the component unmounts
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [snack, token]);
}
