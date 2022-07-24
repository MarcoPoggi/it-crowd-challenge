import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export function useProducts(id = null) {
  const [detail, setDetail] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      setLoading(true);
      getProducts(id)
        .then((data) => {
          if (!data) setError(true);
          Array.isArray(data) ? setProducts(data) : setDetail(data);
          setLoading(false);
        })
        .catch((e) => {
          setError(true);
          setLoading(false);
        });
    },
    [id]
  );

  return { loading, error, products, detail };
}
