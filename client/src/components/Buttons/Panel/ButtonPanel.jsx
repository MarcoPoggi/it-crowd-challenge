import { Link } from "wouter";
import admin_panel_icon from "../../../assets/images/admin-panel-icon.svg";
import styles from "./ButtonPanel.module.css";

export function ButtonPanel() {
  return (
    <>
      <Link href="/admin-panel" className={styles.button_container}>
        <img src={admin_panel_icon} alt="admin panel" />
        <span>Panel</span>
      </Link>
    </>
  );
}
