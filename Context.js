import React from "react";

const Context = React.createContext();

export const Provider = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default Context;
