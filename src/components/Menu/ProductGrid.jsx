import { dummyProductData } from "../../data/ProductData";
import { GreenBtn } from "../Others/Button";
import useCartContext from "../../hooks/useCartContext";

export function ProductCardItem({
  prop,
  onAddChartClick,
  onAddWishClick,
  isWish,
}) {
  const info = useCartContext();
  const dispatch = info.dispatch;

  return (
    <div className="rounded-lg drop-shadow-lg bg-white-100 h-[440px]">
      <img
        src={prop.imgUrl}
        alt={prop.name}
        className="w-full h-4/6 min-h-[300px] object-cover object-bottom rounded-t-lg"
      />
      <div className="pt-1 px-2">
        <div className="h-[80px] mt-1 mb-1.5">
          <div className="flex">
            <span className="product-icon">{prop.class}</span>
            <span className="text-xl font-medium ml-2">{prop.name}</span>
          </div>
          <div className="">$ {prop.price}</div>
        </div>
        <div className="grid gap-4 grid-cols-4">
          <GreenBtn
            className="col-span-3"
            onClick={() => dispatch({ type: "Add", payload: prop })}
          >
            Add to Cart
          </GreenBtn>
          <button
            className={`rounded px-3 py-1 text-xs bg-grullo-100 hover:text-white-100 tablet:text-sm ${
              isWish ? "text-christmas-red" : "text-white-60"
            }`}
            onClick={() => onAddWishClick?.(prop.id)}
          >
            ❤
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductCard({ props, onAddWishClick, isWish }) {
  const ProductCardList = props.map((prop) => {
    prop.quantity = 1
    return (
      <ProductCardItem
        prop={prop}
        onAddWishClick={onAddWishClick}
        isWish={isWish}
      />
    );
  });

  return (
    <div className="grid gap-4 grid-cols-[100%] py-4 grid-row-autofit tablet:grid-cols-2 breakpoint:grid-cols-3 desktop:grid-cols-4">
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
