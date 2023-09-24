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
            onPlusClick={onPlusClick}
            onMinusClick={onMinusClick}
            onRemoveClick={onRemoveClick}
          />
        );
      })}
    </div>
  );
}
