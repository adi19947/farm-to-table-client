import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useAxios from "../hooks/useAxios";

//import { useSnack } from "./SnackbarProvider";
import { useUser } from "../users/providers/UserProvider";
import { useSearchParams } from "react-router-dom";
import {
  deleteProduct,
  getMyProducts,
  getProduct,
  getProducts,
  createProduct,
  editProduct,
  changeCartStatus,
} from "../services/productApiServices";
import { useSnack } from "../../context/SnackbarProvider";

interface Product {
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
  const context = useContext(CardsContext);
  if (!context)
    throw new Error("useCardsContext must be used within a CardsProvider");
  return context;
};

export default function useCardsContextProvider() {
  const [cards, setCards] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [card, setCard] = useState<Product | null>(null);
  const [query, setQuery] = useState<string>("");
  const [searchParams] = useSearchParams();
  const [filteredCards, setFilterCards] = useState<Product[]>([]);
  const [favCards, setFavCards] = useState<Product[]>([]);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFilterCards(
        cards.filter(
          (card) =>
            card.title.toLowerCase().includes(query.toLowerCase()) ||
            String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (
    loading: boolean,
    errorMessage: Error | null,
    cards: Product[],
    card: Product | null = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  // ... (rest of the functions as before, with proper type annotations)
}
