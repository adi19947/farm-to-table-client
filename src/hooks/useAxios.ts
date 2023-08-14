import axios from "axios";
import { useEffect } from "react";
import { useUser } from "./../users/providers/UserProvider";
import { useSnack } from "../context/SnackbarProvider";
export default function useAxios() {
  const snack = useSnack();
  const { token } = useUser();

  useEffect(() => {
    axios.defaults.headers.common["x-auth-token"] = token;
    console.log("out");
    const requestInterceptor = axios.interceptors.request.use((data) => {
      console.log("in");
      return Promise.resolve(data);
    }, null);

    const responseInterceptor = axios.interceptors.response.use(
      null,
      (error) => {
        if (error.message) snack("error", error.message);
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [snack, token]);
}
