import { ReactComponent as Logo } from "../assets/favicon.svg";
import { ReactComponent as Logout } from "../assets/icon/nav_icon/Logout.svg";

import { Link, useNavigate } from "react-router-dom";

export default function HeaderBack() {
  const navigate = useNavigate()
  const handleLogoutClick = () => {
    localStorage.removeItem('token')
    navigate("/ACcafe-vite/back-login");
  }
  return (
    <header className="sticky top-0 left-0 h-[60px] leading-[60px] bg-olive-100 text-white-100 z-[1]">
      <div className="grid gap-2 grid-cols-10 justify-center items-center h-full">
        <div className="w-full flex justify-center items-center col-start-2 col-span-3">
          <span className="logo-icon">
            <Logo />
          </span>
          <div className="flex flex-col items-start ml-2">
            <p className="font-bold text-xl title">AC Café</p>
            <p className="text-xs">Backstage</p>
          </div>
        </div>
        {/* Navbar */}
        <ul className="col-start-5 col-span-2 w-full text-center flex">
          <li className="">
            <Link to="/ACcafe-vite/back-products">Products</Link>
          </li>
          <li className="mx-2"></li>
          <li className="">
            <Link to="/ACcafe-vite/back-news">News</Link>
          </li>
          <li className="mx-2"></li>
          <li className="">Others</li>
        </ul>
        <button
          className="flex justify-end items-center col-start-7 col-span-3"
          onClick={handleLogoutClick}
        >
          <div className="nav-icon flex items-center leading-[60px]">
            <Logout />
          </div>
          <div className="ml-2">Log out</div>
        </button>
      </div>
    </header>
  );
}
