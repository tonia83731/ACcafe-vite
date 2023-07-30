import { useContext } from "react";
import WishContext from "../context/WishContext";


const useWishContext = () => {
  return useContext(WishContext);
};

export default useWishContext;
