import CartItem from "./CartItem";
import useCartContext from "../../hooks/useCartContext";

export default function CartList({ props, onPlusClick, onMinusClick }) {
  const info = useCartContext();
  // const state = info.state;
  const dispatch = info.dispatch;
  return (
    <div className="w-full">
      {props.map((prop) => {
        return (
          <CartItem
            prop={prop}
            key={prop.id}
            onPlusClick={() => dispatch({ type: "Increase", payload: prop })}
            onMinusClick={() => {
              if(prop.quantity>1){
                dispatch({ type: "Decrease", payload: prop });
              } else {
                dispatch({ type: "Remove", payload: prop });
              }
            }}
            onRemoveClick={() => dispatch({type:"Remove", payload: prop})}
          />
        );
      })}
    </div>
  );
}
