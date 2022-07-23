import { useProducts } from "../../hooks/useProducts";
import { usePagination } from "../../hooks/usePagination";
import { ProductCard } from "../ProductCard/ProductCard";
import { Paginator } from "../Paginator/Paginator";
import style from "./Product.module.css";

export function Products() {
  const { loading, error, products } = useProducts();
  const { from, to, handleNext, handlePrev } = usePagination({
    limit: 3,
    total: products.length,
  });

  if (loading) return <div className={style.ProductContainer}>Loading</div>;

  if (error) return <div className={style.ProductContainer}>Error</div>;

  return (
    <main className={style.products_page}>
      <section className={style.products}>
        {Array.isArray(products) ? (
          products.slice(from, to).map((p) => <ProductCard key={p.id} {...p} />)
        ) : (
          <div className={style.ProductContainer}>Error</div>
        )}
      </section>
      <Paginator next={handleNext} prev={handlePrev} />
    </main>
  );
}
