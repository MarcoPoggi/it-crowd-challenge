import "./App.css";
import { Route } from "wouter";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
