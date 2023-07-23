import { ReactComponent as Food } from "../../assets/icon/menu/food.svg";
import { ReactComponent as Delete } from "../../assets/icon/nav_icon/delete.svg";

export function WishListItem() {
  return (
    <li className="px-4 my-2 grid gap-4 grid-cols-7">
      <img
        src="https://images.unsplash.com/photo-1600648832373-6f5e75b71ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="Yogurt with Bake Granola and Fruits"
        className="w-20 h-20 object-cover object-bottom col-span-1"
      />
      <div className="col-start-2 col-span-5">
        <div className="flex items-center leading-normal">
          <span className="product-icon mr-2">
            <Food />
          </span>
          Yogurt with Bake Granola and Fruits
        </div>
        <div className="">$150</div>
      </div>
      <button className="col-start-7 delete-icon">
        <Delete/>
      </button>
    </li>
  );
}

export default function WishList() {
  return (
    <ul className="">
      <li className="title text-xl font-bold text-olive-100 border-b-2 border-grullo-60 pb-3">
        Wish List
      </li>
      <div className="py-2 h-[350px] overflow-scroll">
        <WishListItem />
        <WishListItem />
        <WishListItem />
        <WishListItem />
      </div>
      <li className="text-right pt-3 border-t-2 border-grullo-60">
        <button
          className="bg-black-100 text-white-100 rounded drop-shadow-md h-[45px] leading-[45px] px-2"
        >
          Delete All
        </button>
      </li>
    </ul>
  );
}
