import { Link } from "wouter";
import Logo from "../../assets/images/logoit-crowd.png";
import styles from "./Header.module.css";
import login_icon from "../../assets/images/login-icon.svg";

export function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" /> <h2>CHALLENGE</h2>
        </div>
        <div className={styles.redirect_container}>
          <Link href="/accounts/login">
            <img
              src={login_icon}
              alt="Login"
              className={styles.redirect_image}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
