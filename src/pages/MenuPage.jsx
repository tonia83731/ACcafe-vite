import Cart from "../components/Menu/Cart";
import Product from "../components/Menu/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getFrontProductCartList, deleteOneCartProduct } from "../api/getFrontProductCart";
import { addToCart } from "../api/getFrontProductCart";
import Swal from "sweetalert2";

export default function MenuPage({ onAddWishClick, isWish }) {
  const [cartData, setCartData] = useState([]);
  const handleAddToBagCick = async (id, value) => {
    // console.log(id)
    // console.log(value)
    const product_id = id
    const quantity = value === 0 ? 1 : value
    const addData = {
      product_id: product_id,
      qty: quantity,
    }

    try {
      const data = await addToCart({
        data: addData
      })
      console.log(data)
      setCartData((prev) => {
        return [
          ...prev,
          data.data
        ]
      })
      // if(data.success){
      //    Swal.fire({
      //      position: "top",
      //      title: data.message,
      //      timer: 1000,
      //      icon: "success",
      //      showConfirmButton: false,
      //    });
      // }
      // console.log(newData)
      // console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleRemoveClick = async (id) => {
    console.log(id)
    try {
      await deleteOneCartProduct(id)
      setCartData((prevData) => prevData.filter((data) => data.id !== id));
    } catch (error) {
      console.error(error)
    }
  }
  

  useEffect(() => {
    const getFrontProductCartListAsync = async () => {
      const res = await getFrontProductCartList();
      const datas = res.data.carts;
      // console.log(datas);
      setCartData(datas);
    };
    getFrontProductCartListAsync();
  }, []);
  // console.log(cartData)
  return (
    <>
      <Header props={cartData}/>
      <main className="">
        <Product onAddWishClick={onAddWishClick} isWish={isWish} onAddToBagClick={handleAddToBagCick}/>
        <Cart props={cartData} onRemoveClick={handleRemoveClick}/>
      </main>
      <Footer/>
    </>
  );
}