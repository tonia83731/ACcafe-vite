import { ReactComponent as Food } from "../../assets/icon/menu/food.svg";
import { Link } from "react-router-dom";
import ProductIcon from "../Menu/ProductIcon";

export function BagListItem({prop}) {
  return (
    <li className="px-4 my-2 grid gap-4 grid-cols-6">
      <img
        src={prop.imageUrl}
        alt={prop.title}
        className="w-20 h-20 object-cover object-bottom col-span-1"
      />
      <div className="col-start-2 col-span-5">
        <div className="flex items-center leading-normal">
          <span className="product-icon mr-2">
            <ProductIcon prop={prop.unit} />
          </span>
          {prop.title}
        </div>
        <div className="">${prop.price}</div>
      </div>
    </li>
  );
}

export default function BagList({props}) {
  // console.log(props)
  const handleAnchorClick = () => {
    window.location.href = "#cart";
  };
  return (
    <ul className="">
      <li className="title text-xl font-bold text-olive-100 border-b-2 border-grullo-60 pb-3">
        Shopping Bag
      </li>
      <div className="py-2 h-[350px] overflow-scroll">
        {props.map((prop) => (
          <BagListItem prop={prop.product} key={prop.id} />
        ))}
      </div>
      <li className="text-right pt-3 border-t-2 border-grullo-60">
        <Link to="/ACcafe-vite/menu#cart">
          <button
            className="bg-black-100 text-white-100 rounded drop-shadow-md h-[45px] leading-[45px] px-2"
            onClick={handleAnchorClick}
          >
            To Shopping Bag
          </button>
        </Link>
      </li>
    </ul>
  );
}
