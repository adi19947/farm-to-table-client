import axios, { AxiosResponse } from "axios";

//const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

interface User {
  // Define the shape of the user object here
  // Example: id: number, name: string, email: string, etc.
}

export const login = async (user: User): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.post(
      `${apiUrl}/users/login`,
      user
    );
    console.log(data);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};

export const signup = async (normalizedUser: User): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.post(
      `${apiUrl}/users`,
      normalizedUser
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};

export const getUserData = async (id: number): Promise<any> => {
  try {
    const { data }: AxiosResponse<any> = await axios.get(
      `${apiUrl}/users/${id}`
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};

export const updateUser = async (userId: string, newUser: any) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/users/${userId}`, newUser);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};
