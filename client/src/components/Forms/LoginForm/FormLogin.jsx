import { useState } from "react";
import styles from "./FormLogin.module.css";

export function FormLogin() {
  const types = ["password", "username"];
  const [data, setData] = useState({
    username: "",
    password: "",
    disabled: true,
  });

  const handleDisabled = ({ username, password }) => {
    if (username !== "" && password !== "")
      setData({ username, password, disabled: false });
    else setData({ username, password, disabled: true });
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    if (types.includes(name)) {
      setData({ ...data, [name]: value });
      handleDisabled({ ...data, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleData}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleData}
      />
      <button disabled={data.disabled}>Login</button>
    </form>
  );
}
