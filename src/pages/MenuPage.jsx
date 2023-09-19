import Cart from "../components/Menu/Cart";
import Product from "../components/Menu/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MenuPage({ onAddWishClick, isWish }) {
  return (
    <>
      <Header />
      <main className="">
        <Product onAddWishClick={onAddWishClick} isWish={isWish} />
        <Cart />
      </main>
      <Footer/>
    </>
  );
}