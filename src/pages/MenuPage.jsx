import Cart from "../components/Menu/Cart";
import Product from "../components/Menu/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getFrontProductCartList, deleteOneCartProduct } from "../api/getFrontProductCart";
import { addToCart } from "../api/getFrontProductCart";
import { payOrder } from "../api/payOrder";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function MenuPage({ onAddWishClick, isWish }) {
  // const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const [cartData, setCartData] = useState([]);
  const [priceData, setPriceData] = useState({
    total: 0,
    final_total: 0,
  });
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    address: "",
  });
  const handleAddToBagCick = async (id, value) => {
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
      setCartData((prev) => {
        return [
          ...prev,
          data.data
        ]
      })
      const res = await getFrontProductCartList();
      const total = res.data.total;
      const final_total = res.data.final_total;
      setPriceData({
        total: total,
        final_total: final_total,
      });     
    } catch (error) {
      console.error(error)
    }
  }
  const handleRemoveClick = async (id) => {
    try {
      const data = await deleteOneCartProduct(id)
      console.log(data)
      setCartData((prevData) => prevData.filter((data) => data.id !== id));
      const res = await getFrontProductCartList();
      const total = res.data.total;
      const final_total = res.data.final_total;
      setPriceData({
        total: total,
        final_total: final_total,
      });  
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
      navigate("/ACcafe-vite/");
    }
  };
  useEffect(() => {
    const getFrontProductCartListAsync = async () => {
      const res = await getFrontProductCartList();
      const datas = res.data.carts;
      const total = res.data.total
      const final_total = res.data.final_total
      setCartData(datas);
      setPriceData({
        total: total,
        final_total: final_total
      })
      setCart(res.data)
    };
    getFrontProductCartListAsync();
  }, []);

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