import { ReactComponent as Food } from "../../assets/icon/menu/food.svg";
import { Link } from "react-router-dom";

export function BagListItem({prop}) {
  return (
    <li className="px-4 my-2 grid gap-4 grid-cols-6">
      <img
        src={prop.imgUrl}
        alt={prop.name}
        className="w-20 h-20 object-cover object-bottom col-span-1"
      />
      <div className="col-start-2 col-span-5">
        <div className="flex items-center leading-normal">
          <span className="product-icon mr-2">
            {prop.class}
          </span>
          {prop.name}
        </div>
        <div className="">${prop.price}</div>
      </div>
    </li>
  );
}

export default function BagList({props}) {
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
          <BagListItem prop={prop} key={prop.id}/>
        ))}
      </div>
      <li className="text-right pt-3 border-t-2 border-grullo-60">
        <Link to="/menu#cart">
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
