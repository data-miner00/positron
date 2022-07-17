import React, { useState } from "react";
import { ChildProps } from "./models";

export const AppContext = React.createContext<any>(null);

export function AppContextProvider({ children }: ChildProps) {
  const [currentAccount, setCurrentAccount] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        currentAccount,
        setCurrentAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
