import React, { useReducer, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage'
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
      await fetch(`${baseUrl}/auth/local/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          family: family,
          username: username,
          password: password
        }),
      })
        .then(response => response.json())
        .then(res => setDatauser(res))
        .catch(err => console.log(err));
    } catch (err) { }
  };

  const signin = async ({ email, password }) => {
    try {
      await fetch(`${baseUrl}/auth/local`, {
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
    } catch (err) {

    }
  };

  const updateUser = async ({ email, name, family, id, Address, PhoneNumber, PostalCode }) => {
    try {
      const token = await AsyncStorage.getItem("token");
      await fetch(`${baseUrl}/users/${id}`, {
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
          PhoneNumber: PhoneNumber,
          Address: Address,
          PostalCode: PostalCode
        }),
      })


    } catch (err) { }
  };
  const baseUrl = "http://192.168.1.4:1337"

  return (
    <Context.Provider
      value={{ cartProduct, addCart, deleteCart, signin, signup, updateUser, baseUrl }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
