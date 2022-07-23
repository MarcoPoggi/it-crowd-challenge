import styles from "./Avatar.module.css";

export function Avatar({ label, image }) {
  return (
    <div className={styles.avatar_container}>
      <img src={image} alt="Profile" />
      <h3>{label}</h3>
    </div>
  );
}
