import { createContext, useReducer, useEffect, useState } from "react";
// import { useState } from "react";

const WishContext = createContext();

// const wishFromLocalStorage = JSON.parse(
//   localStorage.getItem("wishState") || "[]"
// );


export const WishProvider = ({ children }) => {
  const initialState = [];
  const initializer = () => {
    JSON.parse(localStorage.getItem("wishArray")) || initialState;
  };
  const wishReducer = (state, action) => {
    switch (action.type) {
      case "Add":
        const tempstate = state.filter((prop) => action.payload.id === prop.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, { ...action.payload }];
        }
      case "Remove":
        const tempstate2 = state.filter(
          (item) => item.id !== action.payload.id
        );
        return tempstate2;
      case "Clear":
        return [];
      default:
        return state;
    }
  };
  const [wishState, dispatch] = useReducer(
    wishReducer, []
    // JSON.parse(localStorage.getItem("wishArray")) || initialState
  );
  const wishInfo = { wishState, dispatch };

  useEffect(() => {
    localStorage.setItem("wishArray", JSON.stringify(wishState));
  }, [wishState]);

  return (
    <WishContext.Provider value={wishInfo}>{children}</WishContext.Provider>
  );
};

export default WishContext;
