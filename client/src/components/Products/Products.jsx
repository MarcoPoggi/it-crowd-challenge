import { useContext } from "react";
import { ResultsContext } from "../../contexts/ResultsContext";

export function Products() {
  const { products, loadingProducts } = useContext(ResultsContext);

  if (loadingProducts) return <h1>Loading</h1>;

  if (products?.length === 0) return <h1>No products</h1>;

  return (
    <main>
      {Array.isArray(products) ? (
        products.map((p) => (
          <div key={p.id}>
            {p.name} - {p.price} - {p.image_url}
          </div>
        ))
      ) : (
        <div>
          <h1>Something has wrong 😥</h1>
        </div>
      )}
    </main>
  );
}
