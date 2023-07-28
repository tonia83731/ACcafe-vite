import { dummyProductData } from "../../data/ProductData"
import { GreenBtn } from "../Others/Button"

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

export function ProductCardItem({ prop, onAddWishClick, isWish }) {
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
          <GreenBtn className="col-span-3">Add to Cart</GreenBtn>
          <button
            className="rounded px-3 py-1 text-xs bg-grullo-100 text-white-60 hover:text-white-100 tablet:text-sm"
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
    return <ProductCardItem prop={prop} onAddWishClick={onAddWishClick}/>;
  });

  return (
    <div className="grid gap-4 grid-cols-[100%] py-4 grid-row-autofit tablet:grid-cols-2 breakpoint:grid-cols-3 desktop:grid-cols-4">
      {ProductCardList}
    </div>
  );
}
