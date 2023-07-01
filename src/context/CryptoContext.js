import { useState } from "react";
import { createContext } from "react";

// ============= Create context object ============
export const CryptoContext = createContext({});

// ============= Create provider component =============
export const CryptoProvider = ({ children }) => {
  const [test, setTest] = useState("this is test state");

  return (
    <CryptoContext.Provider value={{ test }}>{children}</CryptoContext.Provider>
  );
};
