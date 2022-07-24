import { useLocation } from "wouter";
import styles from "./ProductCard.module.css";

export function ProductCard({ id, name, price, image_url }) {
  const [, setLocation] = useLocation();

  return (
    <div
      className={styles.card_container}
      onClick={() => setLocation(`/products/${id}`)}
    >
      <div className={styles.card_image}>
        <img src={image_url} alt={"product"} />
      </div>
      <section className={styles.card_info}>
        <h3>{name}</h3>
        <h2>
          <span>$</span>
          {price}
        </h2>
      </section>
    </div>
  );
}
