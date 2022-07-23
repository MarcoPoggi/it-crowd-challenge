import { Logo } from "../components/Logo/Logo";
import { FormLogin } from "../components/Forms/LoginForm/FormLogin";
import { Avatar } from "../components/Avatar/Avatar";
import logo_img_cut from "../assets/images/logoit-crowd-cut.png";
import admin_img from "../assets/images/admin.jpg";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Redirect } from "wouter";

export function Login() {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  return !authenticated ? (
    <div>
      <header>
        <Logo image={logo_img_cut} />
      </header>
      <Avatar label={"Administrator"} image={admin_img} />
      <FormLogin setAuth={setAuthenticated} />
    </div>
  ) : (
    <Redirect to="/" />
  );
}
