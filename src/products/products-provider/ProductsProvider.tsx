import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

//import { useSnack } from "./SnackbarProvider";

import { useSearchParams } from "react-router-dom";

import { useSnack } from "../../context/SnackbarProvider";
import useAxios from "../../hooks/useAxios";
import {
  changeCartStatus,
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProducts,
  getMyProducts,
} from "../services/productApiServices";
import useUsers from "../../users/hooks/useUsers";

interface Product {
  _id: string;
  likes: string[];
  // Add other properties of the card

  // Define the shape of the card object here
  // Example: id: number, title: string, bizNumber: number, etc.
}

interface ProductContextValue {
  isLoading: boolean;
  card: Product | null;
  cards: Product[];
  error: Error | null;
  filteredCards: Product[];
  favCards: Product[];
}

interface productsProviderProps {
  children: React.ReactNode;
}

const ProductsContext = createContext<ProductContextValue | undefined>(
  undefined
);

export const ProductsProvider = ({ children }: productsProviderProps) => {
  const context = useCardsContextProvider();
  const { Provider } = ProductsContext;

  return <Provider value={context}>{children}</Provider>;
};

export const useCardsContext = (): ProductContextValue => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useCardsContext must be used within a CardsProvider");
  return context;
};

export default function useCardsContextProvider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [query, setQuery] = useState<string>("");
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilterProducts] = useState<Product[]>([]);
  const [favProducts, setFavProducts] = useState<Product[]>([]);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (products) {
      setFilterProducts(
        products.filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            String(card.bizNumber).includes(query)
        )
      );
    }
  }, [products, query]);

  const requestStatus = (
    loading: boolean,
    errorMessage: Error | null,
    products: Product[],
    product: Product | null = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setProducts(products);
    setProduct(product);
  };

  const handleGetProducts = useCallback(async () => {
    try {
      setLoading(true);
      const products: Product[] = await getProducts();

      requestStatus(false, null, products);
      //snack("success", "All the cards are here!");
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, [products]);

  const handleGetMyProducts = useCallback(async () => {
    try {
      setLoading(true);

      const products: Product[] = await getMyProducts();

      requestStatus(false, null, products);
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);

  const handleDeleteProduct = useCallback(async (productId: string) => {
    try {
      setLoading(true);
      await deleteProduct(productId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  const handleGetProduct = useCallback(async (productId: string) => {
    try {
      setLoading(true);
      const product: Product = await getProduct(productId);
      requestStatus(false, null, products, product);
      return product;
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);

  const handleUpdateProduct = useCallback(
    async (productId: string, productFromClient: Product) => {
      try {
        setLoading(true);
        const product: Product = await editProduct(
          productId,
          productFromClient
        );
        requestStatus(false, null, products, product);
        snack("success", "The product has been successfully updated");
      } catch (error) {
        requestStatus(false, error, []);
      }
    },
    []
  );

  const handleCartStatus = useCallback(
    async (productId: string) => {
      try {
        const product: Product = await changeCartStatus(productId);

        setFavProducts(
          favProducts.filter((product) => product._id !== productId)
        );

        requestStatus(false, null, products, product);

        if (product.likes.includes(user?.id)) {
          snack("success", "The business card has been Liked");
        } else {
          snack("success", "The business card has been unliked");
        }
      } catch (error) {
        requestStatus(false, error, []);
      }
    },
    [user, cards, card, favCards]
  );

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      if (!user) {
        // Handle the case when the user is null
        throw new Error("User is null");
      }
      const cards: Card[] = await getCards();

      setFavCards(cards.filter((card) => card.likes.includes(user?.id)));

      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, [user]);

  const handleCreateCard = useCallback(async (cardFromClient: Card) => {
    try {
      setLoading(true);
      const card: Card = await createCard(cardFromClient);
      requestStatus(false, null, cards, card);
      snack("success", "A new business card has been created");
    } catch (error) {
      requestStatus(false, error, []);
    }
  }, []);

  const value: BusinessCardContextValue = useMemo(() => {
    return { isLoading, card, cards, error, filteredCards, favCards };
  }, [isLoading, card, error, cards, filteredCards, favCards]);

  return {
    value,
    handleGetFavCards,
    handleGetCards,
    handleGetMyCards,
    handleDeleteCard,
    handleGetCard,
    handleUpdateCard,
    handleCreateCard,
    handleLikeCard,
  };
}
