import CartList from "./CartList";
import CartForm from "./CartForm";
import CartSummary from "./CartSummary";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartContext from "../../hooks/useCartContext";

import Swal from "sweetalert2";

export default function Cart() {
  const info = useCartContext();
  const state = info.state;
  const dispatch = info.dispatch
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phoneNum: "",
    address: "",
  });

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCartSubmit = (e) => {
    e.preventDefault()
    if(state.length === 0) return
    Swal.fire({
      icon: "success",
      title: "Your order has been submitted",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.reload();
    navigate("*")
  };
  return (
    <section id="cart" className="bg-grullo-60 px-4 py-4">
      <div className="desktop:max-w-[1200px] desktop:mx-auto">
        <div className="title text-2xl font-bold mb-4 tablet:text-3xl">
          Shopping Bag
        </div>
        <div className="grid gap-4 grid-rows-2 breakpoint:grid-rows-none breakpoint:grid-cols-2">
          <CartList props={state}/>
          <form className="grid gap-2 grid-rows-2" onSubmit={handleCartSubmit}>
            <CartForm onFormChange={handleFormChange} formData={formData} />
            <CartSummary />
          </form>
        </div>
      </div>
    </section>
  );
}
