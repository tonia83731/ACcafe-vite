import Cart from "../components/Menu/Cart";
import Product from "../components/Menu/Product";

export default function MenuPage({ onAddWishClick, isWish }) {
  return (
    <main className="">
      <Product onAddWishClick={onAddWishClick} isWish={isWish}/>
      <Cart />
    </main>
  );
}