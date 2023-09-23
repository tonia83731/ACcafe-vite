// import { ReactComponent as HamburgerIcon } from "../assets/icon/nav_icon/hamburger.svg";
// import { ReactComponent as Delete } from "../assets/icon/nav_icon/delete.svg";
import { ReactComponent as UserIcon } from "../assets/icon/nav_icon/user.svg";
import { ReactComponent as WishIcon } from "../assets/icon/nav_icon/like_save.svg";
import { ReactComponent as BagIcon } from "../assets/icon/nav_icon/bag.svg";

import { ReactComponent as Logo } from "../assets/favicon.svg";

import BagList from "./Others/BagList";
import WishList from "./Others/WishList";

import { NavLink, Link } from "react-router-dom";

import useCartContext from "../hooks/useCartContext";
import useWishContext from "../hooks/useWishContext";
import { useState, useEffect } from "react";
import { getFrontProductCartList } from "../api/getFrontProductCart";

export default function Header({ onRemoveWishClick, onRemoveAllWishClick, props }) {
  // const [cartData, setCartData] = useState([])
  // const [cartNum, setCartNum] = useState(0)
  const cartNum = props?.length
   const info = useCartContext();
   const state = info.state;
  //  const dispatch = info.dispatch;
  const wishInfo = useWishContext();
  const wishState = wishInfo.wishState

  // useEffect(() => {
  //   const getFrontProductCartListAsync = async () => {
  //     const res = await getFrontProductCartList()
  //     const datas = res.data.carts
  //     // console.log(datas);
  //     setCartData(datas)
  //     const datasLength = datas?.length
  //     setCartNum(datasLength)
  //     // console.log(cartNum)
  //   }
  //   getFrontProductCartListAsync(); 
  // }, [])

  // console.log(cartData)
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
              Home
            </NavLink>
            <NavLink to="/ACcafe-vite/menu" className="justify-self-center">
              Menu
            </NavLink>
            <NavLink to="/ACcafe-vite/news" className="justify-self-start">
              News
            </NavLink>
          </div>
        </nav>

        {/* Button Group */}
        <div className="w-full col-start-7 col-span-3 flex flex-wrap justify-end breakpoint4:col-start-9 breakpoint4:col-span-1">
          {/* <Link to="#" className="">
            <div className="nav-icon">
              <UserIcon />
            </div>
          </Link> */}
          {/* <div className="wish-dropdown">

          </div> */}

          <div className="wish-dropdown">
            <button type="button" className="mr-4 flex items-center">
              <div className="nav-icon">
                <WishIcon />
              </div>
              <div className="breakpoint:ml-0.5">({wishState.length})</div>
            </button>
            <div
              id="wish-list"
              className="hidden absolute top-[100%] right-0 bg-white-100 drop-shadow-md text-olive-80 w-full px-2 py-4 breakpoint:w-1/4 breakpoint:min-w-[450px]"
            >
              <WishList props={wishState} />
            </div>
          </div>

          <div className="bag-dropdown">
            <button type="button" className="flex items-center">
              <div className="nav-icon">
                <BagIcon />
              </div>
              <div className="ml-0.5">({cartNum})</div>
            </button>
            <div
              id="bag-list"
              className="hidden absolute top-[100%] right-0 bg-white-100 drop-shadow-md text-olive-80 w-full px-2 py-4 breakpoint:w-1/4 breakpoint:min-w-[450px]"
            >
              <BagList props={props} />
            </div>
          </div>
        </div>
        {/* Wish List */}
        {/* <div id="wish-list" className="">

        </div> */}

        {/* Bag List */}
        {/* <div id="bag-list" className="">
          <BagList />
        </div> */}
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
