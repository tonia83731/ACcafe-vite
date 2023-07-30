import { ReactComponent as Food } from "../../assets/icon/menu/food.svg";
import { ReactComponent as Delete } from "../../assets/icon/nav_icon/delete.svg";
import useWishContext from "../../hooks/useWishContext";

export function WishListItem({ prop }) {
  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;

  return (
    <li className="px-4 my-2 grid gap-4 grid-cols-7">
      <img
        src={prop.imgUrl}
        alt={prop.name}
        className="w-20 h-20 object-cover object-bottom col-span-1"
      />
      <div className="col-start-2 col-span-5">
        <div className="flex items-center leading-normal">
          <span className="product-icon mr-2">{prop.class}</span>
          {prop.name}
        </div>
        <div className="">${prop.price}</div>
      </div>
      <button
        className="col-start-7 delete-icon"
        onClick={() => wishDispatch({ type: "Remove", payload: prop })}
      >
        <Delete />
      </button>
    </li>
  );
}

export default function WishList({props}) {
  const wishInfo = useWishContext();
  const wishDispatch = wishInfo.dispatch;
  return (
    <ul className="">
      <li className="title text-xl font-bold text-olive-100 border-b-2 border-grullo-60 pb-3">
        Wish List
      </li>
      <div className="py-2 h-[350px] overflow-scroll">
        {props.map((prop) => (
          <WishListItem prop={prop} key={prop.id} />
        ))}
      </div>
      <li className="text-right pt-3 border-t-2 border-grullo-60">
        <button
          className="bg-black-100 text-white-100 rounded drop-shadow-md h-[45px] leading-[45px] px-2"
          onClick={() => wishDispatch({ type: "Clear", payload: props })}
        >
          Delete All
        </button>
      </li>
    </ul>
  );
}
