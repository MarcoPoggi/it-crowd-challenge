import { Logo } from "../Logo/Logo";
import logo_img_complete from "../../assets/images/logoit-crowd.png";
import styles from "./Header.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { ButtonSession } from "../Buttons/Session/ButtonSession";
import { ButtonPanel } from "../Buttons/Panel/ButtonPanel";

export function Header() {
  const { authenticated } = useContext(AuthContext);

  return (
    <header className={styles.header_container}>
      <div className={styles.content}>
        <Logo image={logo_img_complete} label="Challenge" home={true} />
        <div className={styles.redirect_container}>
          {!authenticated ? (
            <ButtonSession login={true} />
          ) : (
            <>
              <ButtonPanel />
              <ButtonSession login={false} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
