import { createContext, useReducer } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Add":
        const tempstate = state.filter((prop) => action.payload.id === prop.id);
        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }
      case "Increase":
        const tempstate2 = state.map((prop) => {
          if (prop.id === action.payload.id) {
            return { ...prop, quantity: prop.quantity + 1 };
          } else {
            return prop;
          }
        });
        return tempstate2;
      case "Decrease":
        const tempstate3 = state.map((prop) => {
          if (prop.id === action.payload.id) {
            return { ...prop, quantity: prop.quantity - 1 };
          } else {
            return prop;
          }
        });
        return tempstate3;
      case "Remove":
        const tempstate4 = state.filter(
          (item) => item.id !== action.payload.id
        );
        return tempstate4;
      case "Clear":
        return [];
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return <CartContext.Provider value={info}>{children}</CartContext.Provider>;
};

export default CartContext;
