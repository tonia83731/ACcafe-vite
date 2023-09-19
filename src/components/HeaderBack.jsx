import { ReactComponent as Logo } from "../assets/favicon.svg";
import { ReactComponent as Logout } from "../assets/icon/nav_icon/Logout.svg";

import { NavLink, Link } from "react-router-dom";

export default function HeaderBack({ onRemoveWishClick, onRemoveAllWishClick }) {

  return (
    <header className="sticky top-0 left-0 h-[45px] leading-[45px] bg-olive-100 text-white-100 z-[1] tablet:h-[60px] tablet:leading-[60px]">
      <div className="grid gap-2 grid-cols-9 justify-center items-center h-full breakpoint4:grid-cols-10">
        {/* Hamburger */}
        <input type="checkbox" id="nav-toggle" className="nav-toggle hidden" />
        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label text-2xl col-start-2 breakpoint4:hidden"
        >
          &#9776;
        </label>
        {/* Logo */}
        <Link
          to="/ACcafe-vite/"
          className="w-full flex justify-center items-center col-start-3 col-span-4 breakpoint4:col-start-2 breakpoint4:col-span-3"
        >
          <span className="logo-icon">
            <Logo />
          </span>
          <span className="font-bold text-2xl ml-2 title">AC Café</span>
        </Link>

        {/* Navbar */}
        <nav
          id="nav-list"
          className="bg-gold-60 w-full absolute top-[100%] text-center breakpoint4:bg-transparent breakpoint4:static breakpoint4:scale-y-100 breakpoint4:col-start-6 breakpoint4:col-span-2"
        >
          <div
            className="nav-item flex flex-col breakpoint4:grid breakpoint4:gap-4 breakpoint4:grid-cols-3"
            aria-labelledby="nav-toggle"
          >
            <NavLink to="/ACcafe-vite/" className="justify-self-end">
              Products
            </NavLink>
            <NavLink to="/ACcafe-vite/menu" className="justify-self-center">
              News
            </NavLink>
            <NavLink to="/ACcafe-vite/news" className="justify-self-start">
              Discounts
            </NavLink>
          </div>
        </nav>
        <Link to="/ACcafe-vite/back-login" className="flex">
          <div className="nav-icon">
            <Logout />
          </div>
          <div>Log out</div>
        </Link>
      </div>
    </header>
  );
}

{
  /* <div className="flex items-center">
        <span className="logo-icon hidden tablet:block">
          <Logo />
        </span>
        <span className="font-bold text-2xl title ml-2">AC Café</span>
      </div>
      <nav className="">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav> */
}
