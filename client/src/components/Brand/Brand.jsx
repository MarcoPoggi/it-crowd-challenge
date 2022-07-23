import styles from "./Brand.module.css";

export function Brand({ logo, name }) {
  return (
    <section className={styles.brand_container}>
      <div className={styles.brand_img_container}>
        <img src={logo} alt="brand" />
      </div>
      <span> {name}</span>
    </section>
  );
}
