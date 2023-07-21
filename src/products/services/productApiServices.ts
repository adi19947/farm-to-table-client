import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";
console.log(apiUrl);

interface Product {
  // Define the shape of the card object here
  // Example: id: number, title: string, etc.
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${apiUrl}/products`);
    const data = response.data;
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};

export const getMyProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>(`${apiUrl}/cards/my-products`);
    const data = response.data;
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};

export const deleteProduct = async (productId: string): Promise<any> => {
  try {
    const { data } = await axios.delete<any>(`${apiUrl}/products/${productId}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};

export const getProduct = async (productId: string): Promise<Product> => {
  try {
    const { data } = await axios.get<Product>(
      `${apiUrl}/products/${productId}`
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

export const createProduct = async (card: Product): Promise<Product> => {
  try {
    const { data } = await axios.post<Product>(`${apiUrl}/cards/`, card);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};

export const editProduct = async (
  productId: string,
  normalizedCard: Product
): Promise<Product> => {
  try {
    const { data } = await axios.put<Product>(
      `${apiUrl}/cards/${productId}`,
      normalizedCard
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

export const changeCartStatus = async (productId: string): Promise<Product> => {
  try {
    const { data } = await axios.patch<Product>(`${apiUrl}/cards/${productId}`);
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    } else {
      return Promise.reject("An unknown error occurred.");
    }
  }
};
