import { useRoute } from "wouter";
import { useProducts } from "../../hooks/useProducts";
import { Brand } from "../Brand/Brand";
import styles from "./ProductDetail.module.css";

export function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const { error, loading, detail } = useProducts(params?.id);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return !detail ? (
    <h1>Otro Error</h1>
  ) : (
    <div className={styles.detail_container}>
      <Brand logo={detail.brand.logo_url} name={detail.brand.name} />
      <section className={styles.detail_info_container}>
        <div className={styles.image_container}>
          <img src={detail.image_url} alt="product" />
        </div>
        <div className={styles.detail_information}>
          <h3 className={styles.detail_prod_name}>{detail.name}</h3>
          <h3>
            <span className={styles.price}>${detail.price}</span>
          </h3>
          <h4>Description:</h4>
          <p>{detail.description}</p>
        </div>
      </section>
    </div>
  );
}
