
import HomeBanner from "../components/Home/Banner";
import ContactUs from "../components/Home/ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getFrontProductCartList } from "../api/getFrontProductCart";
import { useEffect, useState } from "react";

export default function HomePage(){
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const getFrontProductCartListAsync = async () => {
      const res = await getFrontProductCartList();
      const datas = res.data.carts;
      // console.log(datas);
      setCartData(datas);
    };
    getFrontProductCartListAsync();
  }, []);
  return (
    <>
      <Header props={cartData} />
      <main className="mt-8 mb-12 desktop:max-w-[1200px] desktop:mx-auto">
        <HomeBanner />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}