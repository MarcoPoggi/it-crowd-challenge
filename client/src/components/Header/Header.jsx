import { Link } from "wouter";
import { Logo } from "../Logo/Logo";
import logo_img_complete from "../../assets/images/logoit-crowd.png";
import styles from "./Header.module.css";
import login_icon from "../../assets/images/login-icon.svg";

export function Header() {
  return (
    <header className={styles.header_container}>
      <div className={styles.content}>
        <Logo image={logo_img_complete} label="Challenge"/>
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
