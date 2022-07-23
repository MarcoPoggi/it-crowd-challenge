import { Logo } from "../components/Logo/Logo";
import { FormLogin } from "../components/Forms/LoginForm/FormLogin";
import { Avatar } from "../components/Avatar/Avatar";
import logo_img_cut from "../assets/images/logoit-crowd-cut.png";
import admin_img from "../assets/images/admin.jpg";

export function Login() {
  return (
    <div>
      <header>
        <Logo image={logo_img_cut} />
      </header>
      <Avatar label={"Administrator"} image={admin_img} />
      <FormLogin />
    </div>
  );
}
