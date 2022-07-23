import "./App.css";
import { Route, useLocation } from "wouter";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Detail } from "./pages/Detail";
import { useEffect } from "react";

function App() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (location === "/") setLocation("/products");
  }, [location, setLocation]);

  return (
    <div className="App">
      <Route path="/products" component={Home} />
      <Route path="/products/:id" component={Detail} />
      <Route path="/accounts/login" component={Login} />
    </div>
  );
}

export default App;
