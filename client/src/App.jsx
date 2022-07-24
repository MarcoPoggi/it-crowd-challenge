import "./App.css";
import { Route, useLocation, Router } from "wouter";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Detail } from "./pages/Detail";
import { Panel } from "./pages/Panel";
import { useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (location === "/") setLocation("/products");
  }, [location, setLocation]);

  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Route path="/admin-panel" component={Panel} />
          <Route path="/products" component={Home} />
          <Route path="/products/:id" component={Detail} />
          <Route path="/accounts/login" component={Login} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
