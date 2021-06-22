import { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

// initial state
const initialState = {
  apod: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        apod: state.apod,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
