
import HomeBanner from "../components/Home/Banner";
import ContactUs from "../components/Home/ContactUs";

export default function HomePage(){
  return (
    <main className="mt-8 mb-12 desktop:max-w-[1200px] desktop:mx-auto">
      <HomeBanner />
      <ContactUs />
    </main>
  );
}