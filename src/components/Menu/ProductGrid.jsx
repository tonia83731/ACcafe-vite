import { dummyProductData } from "../../data/ProductData";
import { GreenBtn } from "../Others/Button";
import { useState } from "react";
import useCartContext from "../../hooks/useCartContext";
import useWishContext from "../../hooks/useWishContext";
import ProductIcon from "./ProductIcon";
import { addToCart } from "../../api/getFrontProductCart";

export function ProductCardItem({
  prop, onAddBagClick
}) {
  const [inputValue, setInputValue] = useState(0)
  const info = useCartContext();
  const dispatch = info.dispatch;

  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;
  
  
  const handleAddWish = () => {
    wishDispatch({ type: "Add", payload: prop });
  }
  const handleMinusClick = () => {
    if(inputValue > 0){
      setInputValue(inputValue - 1);
    }
  }
  const handlePlusClick = () => {
    setInputValue(inputValue + 1)
  }
 
  return (
    <div className="rounded-lg drop-shadow-lg bg-white-100 h-[500px]">
      <img
        src={prop.imageUrl}
        alt={prop.title}
        className="w-full h-4/6 min-h-[300px] object-cover object-bottom rounded-t-lg"
      />
      <div className="pt-1 px-2">
        <div className="h-[80px] mt-1 mb-1.5">
          <div className="flex">
            <span className="product-icon">
              <ProductIcon prop={prop.unit} />
            </span>
            <span className="text-xl font-medium ml-2">{prop.title}</span>
          </div>
          <div className="">$ {prop.price}</div>
        </div>
        <div className="w-full border mb-1 px-2 flex justify-between">
          <button className="text-lg pl-2" onClick={handleMinusClick}>
            -
          </button>
          <input
            type="text"
            className="w-9/12 bg-white-40 text-olive-60 rounded text-center mx-2 border-x"
            pattern="[0-9]*"
            value={inputValue}
            disabled
          />
          <button className="text-lg pr-2" onClick={handlePlusClick}>
            +
          </button>
        </div>
        <div className="grid gap-4 grid-cols-4">
          <GreenBtn
            className="col-span-2"
            onClick={() => onAddBagClick?.(prop.id, inputValue)}
          >
            Add to Cart
          </GreenBtn>
          <button
            className="col-span-2 rounded px-3 py-1 text-[10px] breakpoint5:text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100"
            onClick={handleAddWish}
          >
            Add to Wish
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ props, onAddWishClick, onAddBagClick }) {
  const ProductCardList = props.map((prop) => {
    return (
      <ProductCardItem
        prop={prop}
        key={prop.id}
        onAddWishClick={onAddWishClick}
        onAddBagClick={onAddBagClick}
      />
    );
  });

  return (
    <div className="grid gap-4 grid-cols-[100%] py-4 grid-row-autofit tablet:grid-cols-2 breakpoint2:grid-cols-3 breakpoint3:grid-cols-4">
      {ProductCardList}
    </div>
  );
}