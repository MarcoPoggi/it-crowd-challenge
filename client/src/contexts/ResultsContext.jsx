import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/products";

export const ResultsContext = createContext();

export function ResultsProvider({ children }) {
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoadingProducts(true);
    getProducts()
      .then((data) => {
        setResults(data);
        setLoadingProducts(false);
      })
      .catch(() => setLoadingProducts(false));
  }, []);

  return (
    <ResultsContext.Provider
      value={{
        results,
        products,
        loadingProducts,
        setProducts,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
}
