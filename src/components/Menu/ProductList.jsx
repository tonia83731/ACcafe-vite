import { dummyProductData } from "../../data/ProductData";
import { GreenBtn } from "../Others/Button";

export function ProductListItem({prop, onAddWishClick, isWish}) {
  return (
    <div className="grid gap-4 grid-cols-5 items-center border-b-2 border-grullo-60 px-2 py-1 hover:bg-black-5">
      <div className="col-span-3 tablet:col-span-4 tablet:flex tablet:justify-between">
        <div className="flex">
          <span className="product-icon">{prop.class}</span>
          <span className="text-xl font-medium ml-2">{prop.name}</span>
        </div>
        <div className="tablet:pr-24">$ {prop.price}</div>
      </div>
      <div className="col-span-2 tablet:col-span-1">
        <div className="grid gap-4 grid-cols-4">
          <GreenBtn className="col-span-3">Add to Cart</GreenBtn>
          <button
            className="rounded px-2 py-1 min-w-[40px] text-xs bg-grullo-100 text-white-60 hover:text-white-100 tablet:text-sm"
            onClick={() => onAddWishClick?.(prop.id)}
          >
            ❤
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductList({ props, onAddWishClick, isWish }) {
  const ProductListList = props.map((prop) => {
    return <ProductListItem prop={prop} onAddWishClick={onAddWishClick} />;
  });
  return <div className="py-4">{ProductListList}</div>;
}
