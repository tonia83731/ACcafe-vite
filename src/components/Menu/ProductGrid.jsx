import { dummyProductData } from "../../data/ProductData";
import { GreenBtn } from "../Others/Button";
import { useState } from "react";
import useCartContext from "../../hooks/useCartContext";
import useWishContext from "../../hooks/useWishContext";
import ProductIcon from "./ProductIcon";

export function ProductCardItem({
  prop
}) {
  const info = useCartContext();
  const dispatch = info.dispatch;

  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;
  
  
  const handleAddWish = () => {
    wishDispatch({ type: "Add", payload: prop });
  }

  return (
    <div className="rounded-lg drop-shadow-lg bg-white-100 h-[440px]">
      <img
        src={prop.imageUrl}
        alt={prop.title}
        className="w-full h-4/6 min-h-[300px] object-cover object-bottom rounded-t-lg"
      />
      <div className="pt-1 px-2">
        <div className="h-[80px] mt-1 mb-1.5">
          <div className="flex">
            <span className="product-icon"><ProductIcon prop={prop.unit}/></span>
            <span className="text-xl font-medium ml-2">{prop.title}</span>
          </div>
          <div className="">$ {prop.price}</div>
        </div>
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
            Add to Wish
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ props, onAddWishClick }) {
  const ProductCardList = props.map((prop) => {
    prop.quantity = 1
    // const wishInfo = useWishContext();
    
    return (
      <ProductCardItem
        prop={prop}
        key={prop.id}
        onAddWishClick={onAddWishClick}
      />
    );
  });

  return (
    <div className="grid gap-4 grid-cols-[100%] py-4 grid-row-autofit tablet:grid-cols-2 breakpoint2:grid-cols-3 breakpoint3:grid-cols-4">
      {ProductCardList}
    </div>
  );
}

// export default function ProductCard({data}){
//   return (
//     <div className="product-card" key={data.id}>
//       <img src={data.imgUrl} alt={data.name} class="product-img" />
//       <div className="card-body">
//         <h5 className="product-title">
//           {data.class} {data.name}
//         </h5>
//         <p className="product-price">$ {data.price}</p>
//       </div>
//       <div className="card-quantity">
//         <button
//           className="quantity-btn minus cursor-pointer"
//           id="minus"
//           onClick={() => onClickMinus(data.id)}
//         >
//           -
//         </button>
//         <span className="quantity-count">{data.quantity}</span>
//         <button
//           className="quantity-btn plus cursor-pointer"
//           id="plus"
//           onClick={() => onClickPlus(data.id)}
//         >
//           +
//         </button>
//       </div>
//       <div className="card-btn">
//         <button className="btn default-btn add-cart-btn">Add to Cart</button>
//         <button className="btn wish-btn">
//           <Like />
//         </button>
//       </div>
//     </div>
//   );
// }
