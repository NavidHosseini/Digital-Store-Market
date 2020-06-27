import React, { useReducer } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          url: action.payload.url,
          price: action.payload.price,
        },
      ];
    case "DELETE_CART":
      return state.filter(state => state.id !== action.payload);

    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [cartProduct, dispatch] = useReducer(reducer, []);

  const addCart = ({ title, url, price }) => {
    return dispatch({ type: "ADD_CART", payload: { title, url, price } });
  };
  const deleteCart = id => {
    return dispatch({ type: "DELETE_CART", payload: id });
  };

  return (
    <Context.Provider value={{ cartProduct, addCart, deleteCart }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
