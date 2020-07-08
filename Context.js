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
  const [datauser, setDatauser] = useState("");

  const addCart = ({ title, url, price }) => {
    return dispatch({ type: "ADD_CART", payload: { title, url, price } });
  };
  const deleteCart = id => {
    return dispatch({ type: "DELETE_CART", payload: id });
  };

  const signup = async ({ email, password, name, username, family }) => {
    try {
      await fetch("http://192.168.1.7:1337/auth/local/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
          username: username,
          family: family,
        }),
      })
        .then(response => response.json())
        .then(res => setDatauser(res))
        .catch(err => console.log(err));
      await AsyncStorage.setItem("token", datauser.jwt);
    } catch (err) { }
  };

  const signin = async ({ email, password }) => {
    try {
      await fetch("http://192.168.1.7:1337/auth/local", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      })
        .then(response => response.json())
        .then(async (res) => {
          setDatauser(res)

          await AsyncStorage.setItem("token", res.jwt);
        })
        .catch(err => console.log(err));
    } catch (err) { }
  };

  const updateUser = async ({ email, name, family, id }) => {
    try {
      const token = await AsyncStorage.getItem("token");
      fetch(`http://192.168.1.7:1337/users/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          email: email,
          name: name,
          family: family,
        }),
      })


    } catch (err) { }
  };

  return (
    <Context.Provider
      value={{ cartProduct, addCart, deleteCart, signin, signup, updateUser }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
