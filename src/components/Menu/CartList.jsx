import CartItem from "./CartItem";
import useCartContext from "../../hooks/useCartContext";

export default function CartList({ props, onPlusClick, onMinusClick, onRemoveClick }) {
  const info = useCartContext();
  // const state = info.state;
  const dispatch = info.dispatch;
  // console.log(props)
  return (
    <div className="w-full h-[450px] overflow-y-auto">
      {props.map((prop) => {
        return (
          <CartItem
            prop={prop}
            key={prop.id}
            onPlusClick={() => dispatch({ type: "Increase", payload: prop })}
            onMinusClick={() => {
              if (prop.quantity > 1) {
                dispatch({ type: "Decrease", payload: prop });
              } else {
                dispatch({ type: "Remove", payload: prop });
              }
            }}
            onRemoveClick={onRemoveClick}
          />
        );
      })}
    </div>
  );
}
