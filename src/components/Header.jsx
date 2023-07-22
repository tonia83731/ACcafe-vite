// import { ReactComponent as Hamburger } from "../assets/icon/nav_icon/hamburger.svg";
// import { ReactComponent as Delete } from "../assets/icon/nav_icon/delete.svg";
// import { ReactComponent as User } from "../assets/icon/nav_icon/user.svg";
// import { ReactComponent as Wish } from "../assets/icon/nav_icon/like_save.svg";
// import { ReactComponent as Bag } from "../assets/icon/nav_icon/bag.svg";

import {ReactComponent as Logo} from "../assets/favicon.svg"

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 h-[45px] leading-[45px] bg-olive-100 text-white-100 z-[1] tablet:h-[60px] tablet:leading-[60px]">
      <div className="flex items-center">
        <span className="logo-icon hidden tablet:block">
          <Logo />
        </span>
        <span className="font-bold text-2xl title ml-2">AC Café</span>
      </div>
      <nav className="">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav>
    </header>
  );
}
