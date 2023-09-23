import Cart from "../components/Menu/Cart";
import Product from "../components/Menu/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getFrontProductCartList, deleteOneCartProduct } from "../api/getFrontProductCart";
import { addToCart } from "../api/getFrontProductCart";
import { payOrder } from "../api/payOrder";
import Swal from "sweetalert2";

export default function MenuPage({ onAddWishClick, isWish }) {
  const [cartData, setCartData] = useState([]);
  const [priceData, setPriceData] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    address: "",
  });
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
  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCartSubmit = async (e) => {
    e.preventDefault();
    // if (state.length === 0) return;
    const res = await payOrder({
      data: {user: formData}
    })
    if(res.success){
      Swal.fire({
        icon: "success",
        title: "Your order has been submitted",
        showConfirmButton: false,
        timer: 1500,
      });
      setFormData({
        name: "",
        tel: "",
        email: "",
        address: "",
      });
      setCartData([])
    }
  };
  console.log(formData)
  // console.log(priceData);
  useEffect(() => {
    const getFrontProductCartListAsync = async () => {
      const res = await getFrontProductCartList();
      const datas = res.data.carts;
      const price = res.data
      // console.log(datas);
      setCartData(datas);
      setPriceData(price)
    };
    getFrontProductCartListAsync();
  }, []);
  // console.log(cartData)
  // console.log(priceData)
  return (
    <>
      <Header props={cartData}/>
      <main className="">
        <Product onAddWishClick={onAddWishClick} isWish={isWish} onAddToBagClick={handleAddToBagCick}/>
        <Cart props={cartData} formData={formData} onFormChange={handleFormChange} onCartSubmit={handleCartSubmit} onRemoveClick={handleRemoveClick} priceData={priceData}/>
      </main>
      <Footer/>
    </>
  );
}