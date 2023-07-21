import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { login, signup, updateUser } from "../services/usersApiService";
import {
  getUser,
  removeTokenFromLocalStorage,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";

import normalizeUser from "../helpers/normalization/normalizeUser";

import userBackendToClient from "../helpers/normalization/userBackendToClient";

import ROUTES from "../../routes/routesModel";
import { useSnack } from "../../context/SnackbarProvider";

interface UseUsersResult {
  isLoading: boolean;
  error: any;
  // user: User | null;
}

const useUsers = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();
  const snack = useSnack();
  useAxios();

  const requestStatus = useCallback(
    (loading: boolean, errorMessage: any, user: User | null = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user: User) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.PRODUCTS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeTokenFromLocalStorage();
    navigate(ROUTES.ROOT);
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromClient: User) => {
      try {
        const normalizedUser = normalizeUser(userFromClient);
        await signup(normalizedUser);
        await handleLogin({
          email: userFromClient.email,
          password: userFromClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [requestStatus, handleLogin]
  );

  const handleUpdateUser = useCallback(
    async (userId: string, newUser: User) => {
      try {
        setLoading(true);
        const user = await updateUser(userId, newUser);
        const modelUser = userBackendToClient(user);
        console.log(modelUser);
        requestStatus(false, null, modelUser);

        snack("success", "The user has been successfully updated");
      } catch (error) {
        requestStatus(false, error, []);
      }
    },
    []
  );

  const value: UseUsersResult = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleUpdateUser,
  };
};

export default useUsers;
