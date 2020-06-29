import React, { useReducer, useState } from "react";
import { AsyncStorage } from "react-native";

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
  const [data, setData] = useState("");

  const addCart = ({ title, url, price }) => {
    return dispatch({ type: "ADD_CART", payload: { title, url, price } });
  };
  const deleteCart = id => {
    return dispatch({ type: "DELETE_CART", payload: id });
  };
  const signin = async ({ username, password }) => {
    try {
      await fetch("http://192.168.1.3:1337/auth/local", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: username,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(res => setData(res))
        .catch(err => console.log(err));
      //console.log(data.jwt);
      await AsyncStorage.setItem("token", data.jwt);
    } catch (err) {}
  };

  return (
    <Context.Provider value={{ cartProduct, addCart, deleteCart, signin }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
