
import HomeBanner from "../components/Home/Banner";
import ContactUs from "../components/Home/ContactUs";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage(){
  return (
    <>
      <Header/>
      <main className="mt-8 mb-12 desktop:max-w-[1200px] desktop:mx-auto">
        <HomeBanner />
        <ContactUs />
      </main>
      <Footer/>
    </>
  );
}