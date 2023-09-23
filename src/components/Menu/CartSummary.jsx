import { GreenBtn } from "../Others/Button";
import useCartContext from "../../hooks/useCartContext";
import { useState } from "react";

export default function CartSummary({prop}) {
  
  const info = useCartContext();
  const state = info.state;
  const dispatch = info.dispatch;

  const [selectedValue, setSelectedValue] = useState("")
  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value)
  }

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const sum = total + total*0.1 + Number(selectedValue)
  
  return (
    <div className="bg-white-60 w-full">
      <div className="px-2 pt-2 pb-4">
        <div className="title text-xl font-bold mb-4 tablet:text-2xl">
          Order Summary
        </div>
        <div className="px-2 border-b-2 border-grullo-60 pb-2">
          <p className="">
            <span className="">Price:</span>
            <span className="ml-1.5">{prop.total}</span>
          </p>
          {/* <p className="">
            <span className="">Tax(10%):</span>
            <span className="ml-1.5">${total*0.1}</span>
          </p> */}
          <label htmlFor="shipping" className="">
            Shipping:
          </label>
          <select
            name="shipping"
            id="shipping"
            className="ml-1.5 bg-transparent"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="0" className="">
              <div className="">Standard Shipping (3-7 days) free</div>
            </option>
            {/* <option value="80" className="">
              <div className="">DHL Shipping (48 hours) $100</div>
            </option> */}
          </select>
        </div>
        <p className="p-2">
          <span className="">Total:</span>
          <span className="ml-1.5">{prop.final_total}</span>
        </p>
        <GreenBtn className="w-full px-2 mt-8">Submit</GreenBtn>
      </div>
    </div>
  );
}
