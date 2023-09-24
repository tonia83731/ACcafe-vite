
import { GreenBtn } from "../Others/Button";
import useCartContext from "../../hooks/useCartContext";
import useWishContext from "../../hooks/useWishContext";
import ProductIcon from "./ProductIcon";
import { useState } from "react";


export function ProductListItem({ prop, onAddBagClick }) {
  const [inputValue, setInputValue] = useState(0);
  const info = useCartContext();
  const dispatch = info.dispatch;

  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;

  const handleAddWish = () => {
    wishDispatch({ type: "Add", payload: prop });
  };
  const handleMinusClick = () => {
    if (inputValue > 0) {
      setInputValue(inputValue - 1);
    }
  };
  const handlePlusClick = () => {
    setInputValue(inputValue + 1);
  };

  return (
    <div className="grid gap-4 grid-cols-5 items-center border-b-2 border-grullo-60 px-2 py-1 hover:bg-black-5">
      <div className="col-span-2 breakpoint2:col-span-3 tablet:flex tablet:justify-between">
        <div className="flex">
          <span className="product-icon">
            <ProductIcon prop={prop.unit} />
          </span>
          <span className="text-base breakpoint5:text-xl font-medium ml-2">
            {prop.title}
          </span>
        </div>
        <div className="tablet:pr-8">${prop.price}</div>
      </div>
      <div className="col-span-2 breakpoint2:col-span-1 border mb-1 px-2 flex justify-between min-w-[110px]">
        <button className="text-lg  tablet:pl-2" onClick={handleMinusClick}>
          -
        </button>
        <input
          type="text"
          className="w-9/12 bg-white-40 text-olive-60 rounded text-center mx-2 border-x min-w-[50px]"
          pattern="[0-9]*"
          value={inputValue}
          disabled
        />
        <button className="text-lg  desktop:pr-2" onClick={handlePlusClick}>
          +
        </button>
      </div>
      <div className="col-span-1 breakpoint2:col-span-1">
        <div className="grid gap-1 grid-rows-2">
          <GreenBtn
            className=""
            onClick={() => onAddBagClick?.(prop.id, inputValue)}
          >
            Add Cart
          </GreenBtn>
          <button
            className="rounded px-3 py-1 text-[10px] breakpoint5:text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100"
            onClick={handleAddWish}
          >
            Add Wish
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductList({ props, onAddWishClick, isWish, onAddBagClick }) {
  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;
  const wishState = wishInfo.wishState;
  const ProductListList = props.map((prop) => {
    prop.quantity = 1;
    return (
      <ProductListItem
        prop={prop}
        isWish={isWish}
        onAddBagClick={onAddBagClick}
      />
    );
  });
  return <div className="py-4">{ProductListList}</div>;
}
