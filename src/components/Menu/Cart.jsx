import CartList from "./CartList";
import CartSummary from "./CartSummary";


export default function Cart(){
  return (
    <section id="cart" className="bg-grullo-60 px-4 py-4">
      <div className="desktop:max-w-[1200px] desktop:mx-auto">
        <div className="title text-2xl font-bold mb-4 tablet:text-3xl">
          Shopping Bag
        </div>
        <div className="grid gap-4 grid-rows-2 tablet:grid-rows-none tablet:grid-cols-2">
          <CartList />
          <CartSummary/>
        </div>
      </div>
    </section>
  );
}