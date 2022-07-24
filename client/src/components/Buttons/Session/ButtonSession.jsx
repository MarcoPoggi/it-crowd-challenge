import login_icon from "../../../assets/images/login-icon.svg";
import logout_icon from "../../../assets/images/logout-icon.svg";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link } from "wouter";

import styles from "./ButtonSession.module.css";

export function ButtonSession({ login }) {
  const { setAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    setAuthenticated(false);
  };

  return login ? (
    <Link href="/accounts/login" className={styles.button_container}>
      <img
        src={login_icon}
        alt="Login"
        className={styles.redirect_image_login}
      />
      <span>Login</span>
    </Link>
  ) : (
    <button onClick={handleLogout} className={styles.button_container}>
      <img
        src={logout_icon}
        alt="Logout"
        className={styles.redirect_image_logout}
      />
      <span>Logout</span>
    </button>
  );
}
