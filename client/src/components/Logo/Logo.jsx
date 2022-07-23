import { Link } from "wouter";
import styles from "./Logo.module.css";

export function Logo({ image, label, home }) {
  return (
    <Link className={home ? styles.logo : styles.logo_in_login} href="/">
      <img src={image} alt="Logo" />
      {!label ? null : <h2>CHALLENGE</h2>}
    </Link>
  );
}
