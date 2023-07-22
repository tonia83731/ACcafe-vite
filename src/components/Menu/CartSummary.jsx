import { GreenBtn } from "../Others/Button";


export default function CartSummary(){
  return (
    <div className="bg-white-60 w-full">
      <div className="px-2 pt-2 pb-4">
        <div className="title text-xl font-bold mb-4 tablet:text-2xl">
          Order Summary
        </div>
        <div className="px-2 border-b-2 border-grullo-60 pb-2">
          <p className="">
            <span className="">Price:</span>
            <span className="ml-1.5">150</span>
          </p>
          <p className="">
            <span className="">Tax(10%):</span>
            <span className="ml-1.5">$15</span>
          </p>
          <label htmlFor="shipping" className="">
            Shipping:
          </label>
          <select
            name="shipping"
            id="shipping"
            className="ml-1.5 bg-transparent"
          >
            <option value="0" className="">
              <div className="">Standard Shipping (3-7 days) free</div>
            </option>
            <option value="80" className="">
              <div className="">DHL Shipping (48 hours) $100</div>
            </option>
          </select>
        </div>
        <p className="p-2">
          <span className="">Total:</span>
          <span className="ml-1.5">165</span>
        </p>
        <GreenBtn className="w-full px-2">Submit</GreenBtn>
      </div>
    </div>
  );
}