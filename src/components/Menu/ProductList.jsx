import { dummyProductData } from "../../data/ProductData";
import { GreenBtn } from "../Others/Button";
import useCartContext from "../../hooks/useCartContext";
import useWishContext from "../../hooks/useWishContext";

export function ProductListItem({ prop }) {
  const info = useCartContext();
  const dispatch = info.dispatch;

  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;
  
  const handleAddWish = () => {
    wishDispatch({ type: "Add", payload: prop });
  };

  return (
    <div className="grid gap-4 grid-cols-5 items-center border-b-2 border-grullo-60 px-2 py-1 hover:bg-black-5">
      <div className="col-span-3 breakpoint2:col-span-3 tablet:flex tablet:justify-between">
        <div className="flex">
          <span className="product-icon">{prop.class}</span>
          <span className="text-xl font-medium ml-2">{prop.name}</span>
        </div>
        <div className="tablet:pr-8">${prop.price}</div>
      </div>
      <div className="col-span-2 breakpoint2:col-span-2">
        <div className="grid gap-4 grid-cols-4">
          <GreenBtn
            className="col-span-2"
            onClick={() => dispatch({ type: "Add", payload: prop })}
          >
            Add to Cart
          </GreenBtn>
          <button
            className="col-span-2 rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100"
            onClick={handleAddWish}
          >
            Add Wish
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductList({ props, onAddWishClick, isWish }) {
  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;
  const wishState = wishInfo.wishState;
  const ProductListList = props.map((prop) => {
    prop.quantity = 1
    return (
      <ProductListItem
        prop={prop}
        isWish={isWish}
      />
    );
  });
  return <div className="py-4">{ProductListList}</div>;
}
