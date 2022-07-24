import { Header } from "../components/Header/Header";
import { FormProduct } from "../components/Forms/ProductForm/FormProduct";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "wouter";

export function Panel() {
  const { authenticated } = useContext(AuthContext);
  return !authenticated ? (
    <Redirect to="/accounts/login" />
  ) : (
    <div>
      <Header />
      <FormProduct />
    </div>
  );
}
