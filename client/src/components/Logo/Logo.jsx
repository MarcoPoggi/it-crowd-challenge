import styles from "./Logo.module.css";

export function Logo({ image, label, home }) {
  return (
    <div className={home ? styles.logo : styles.logo_in_login}>
      <img src={image} alt="Logo" />
      {!label ? null : <h2>CHALLENGE</h2>}
    </div>
  );
}
