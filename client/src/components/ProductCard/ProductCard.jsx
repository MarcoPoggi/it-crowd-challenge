import no_img from "../../assets/images/no-img.png";
import styles from "./ProductCard.module.css";

export function ProductCard({ name, price, image_url }) {
  return (
    <div className={styles.card_container}>
      <div>
        <img src={image_url} alt={no_img} />
      </div>
      <section className={styles.card_info}>
        <h3>{name}</h3>
        <h2><span>$</span>{price}</h2>
      </section>
    </div>
  );
}
