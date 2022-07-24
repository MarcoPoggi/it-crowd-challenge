import { createContext, useEffect, useState } from "react";
import { authorizedToken } from "../services/authorization";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    !token
      ? setAuthenticated(false)
      : authorizedToken().then((authorized) => {
          setAuthenticated(authorized);
        });
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
