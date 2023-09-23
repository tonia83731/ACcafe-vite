import CartList from "./CartList";
import CartForm from "./CartForm";
import CartSummary from "./CartSummary";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";
import {
  getFrontProductCartList,
  deleteOneCartProduct,
} from "../../api/getFrontProductCart";

import Swal from "sweetalert2";

export default function Cart({ props, onRemoveClick, priceData, formData, onFormChange , onCartSubmit }) {
  const info = useCartContext();
  const state = info.state;
  const dispatch = info.dispatch;
  const [cartData, setCartData] = useState([]);

  
  // const handleCartSubmit = (e) => {
  //   e.preventDefault();
  //   if (state.length === 0) return;
  //   Swal.fire({
  //     icon: "success",
  //     title: "Your order has been submitted",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });
  //   setFormData({
  //     name: "",
  //     tel: "",
  //     email: "",
  //     address: "",
  //   });
  //   dispatch({ type: "Clear" });
  // };
  // const handleRemoveClick = async (id) => {
  //   console.log(id);
  //   try {
  //     await deleteOneCartProduct(id);
  //     setCartData((prevData) => prevData.filter((data) => data.id !== id));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    const getFrontProductCartListAsync = async () => {
      const res = await getFrontProductCartList();
      const datas = res.data.carts;
      // console.log(datas);
      setCartData(datas);
      // console.log(res.data)
    };
    getFrontProductCartListAsync();
  }, []);
  // console.log(cartData)
  return (
    <section id="cart" className="bg-grullo-60 px-4 py-4">
      <div className="desktop:max-w-[1200px] desktop:mx-auto">
        <div className="title text-2xl font-bold mb-4 tablet:text-3xl">
          Shopping Bag
        </div>
        <div className="grid gap-4 grid-rows-2 breakpoint:grid-rows-none breakpoint:grid-cols-2">
          <CartList props={props} onRemoveClick={onRemoveClick} />
          <form className="grid gap-2 grid-rows-2" onSubmit={onCartSubmit}>
            <CartForm onFormChange={onFormChange} formData={formData} />
            <CartSummary prop={priceData} />
          </form>
        </div>
      </div>
    </section>
  );
}
