import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  getTokenFromLocalStorage,
  getUser,
} from "../services/localStorageService";

interface User {
  // Define the shape of the user object here
  // Example: id: number, name: string, email: string, etc.
}

interface UserContextValue {
  user: User | null;
  setUser: (user: User | null) => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

const userContext = createContext<UserContextValue | undefined>(undefined);

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(getTokenFromLocalStorage());

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, setUser, token, setToken }),
    [user, token, setUser]
  );

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}

export const useUser = (): UserContextValue => {
  const context = useContext(userContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
