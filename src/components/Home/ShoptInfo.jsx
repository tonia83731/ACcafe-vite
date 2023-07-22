import { dummyShopData } from "../../data/ShopData";

import { ReactComponent as OpenTime } from "../../assets/icon/home_icon/open_time.svg";
import { ReactComponent as Location } from "../../assets/icon/home_icon/location.svg";
import { ReactComponent as Phone } from "../../assets/icon/home_icon/phone.svg";


export default function ShopInfo(){
  const shopItems = dummyShopData.map((shop) => {
    return (
      <div className="pt-1 pb-2" key={shop.id}>
        <h5 class="title text-xl font-bold mb-2">{shop.name}</h5>
        <ul className="shop-list">
          <li className="shop-item flex items-center">
            <Location /> <span className="ml-1.5">{shop.location}</span>
          </li>
          <li className="shop-item flex items-center my-1">
            <Phone /> <span className="ml-1.5">{shop.phone}</span>
          </li>
          <li className="shop-item flex items-center">
            <OpenTime /> <span className="ml-1.5">{shop.openTime}</span>
          </li>
        </ul>
      </div>
    );
  })
  return(
    <>
      {shopItems}
    </>
  )
}