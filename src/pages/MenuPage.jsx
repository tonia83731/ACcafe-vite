import Cart from "../components/Menu/Cart";
import Product from "../components/Menu/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getFrontProductCartList, deleteOneCartProduct, addToCart, updateCart } from "../api/getFrontProductCart";
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
  const handleMinusClick = async (id) => {
    // console.log(id)
    const item = cartData.filter((item) => item.product_id === id)
    const itemInfo = item[0]
    const itemqty = itemInfo.qty
    const cartId = itemInfo.id
    console.log(cartId);
    // console.log(itemqty)
    try {
      if(itemqty < 2) return
      const newqty = itemqty - 1 
      const newData = {
        product_id: id,
        qty: newqty
      }
      const data = await updateCart(cartId, {
        data: newData
      })

      if(data.success){
        const res = await getFrontProductCartList();
        const datas = res.data.carts;
        const total = res.data.total;
        const final_total = res.data.final_total;
        setCartData(datas);
        setPriceData({
          total: total,
          final_total: final_total,
        });  
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handlePlusClick = async (id) => {
    // console.log(id);
    const item = cartData.filter((item) => item.product_id === id);
    const itemInfo = item[0];
    const itemqty = itemInfo.qty;
    const cartId = itemInfo.id;
    // console.log(cartId);
    // console.log(itemqty)
    try {
      // if (itemqty < 2) return;
      const newqty = itemqty + 1;
      const newData = {
        product_id: id,
        qty: newqty,
      };
      const data = await updateCart(cartId, {
        data: newData,
      });

      if (data.success) {
        const res = await getFrontProductCartList();
        const datas = res.data.carts;
        const total = res.data.total;
        const final_total = res.data.final_total;
        setCartData(datas);
        setPriceData({
          total: total,
          final_total: final_total,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleRemoveClick = async (id) => {
    try {
      const data = await deleteOneCartProduct(id)
      // console.log(data)
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
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional: for smooth scrolling
      });
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
    };
    getFrontProductCartListAsync();
  }, []);

  return (
    <>
      <Header props={cartData} />
      <main className="">
        <Product
          onAddWishClick={onAddWishClick}
          isWish={isWish}
          onAddToBagClick={handleAddToBagCick}
        />
        <Cart
          props={cartData}
          formData={formData}
          onFormChange={handleFormChange}
          onCartSubmit={handleCartSubmit}
          onPlusClick={handlePlusClick}
          onMinusClick={handleMinusClick}
          onRemoveClick={handleRemoveClick}
          priceData={priceData}
        />
      </main>
      <Footer />
    </>
  );
}