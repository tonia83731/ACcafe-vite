import { createContext, useReducer, useEffect, useState } from "react";
// import { useState } from "react";

const WishContext = createContext();

export const WishProvider = ({ children }) => {
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
  const [wishState, dispatch] = useReducer(wishReducer, []);
  const wishInfo = { wishState, dispatch };

  return (
    <WishContext.Provider value={wishInfo}>{children}</WishContext.Provider>
  );
};

export default WishContext;
