import ShopInfo from "./ShoptInfo"


export default function ContactUs(){
  return (
    <section id="contact-us" className="px-4 py-4">
      <div className="title text-2xl font-bold mb-4 tablet:text-3xl">
        Contact Us
      </div>
      <div className="grid gap-4 grid-cols-2 grid-rows-banner-2">
        <div className="bg-contact-us-banner-mobile bg-no-repeat bg-cover bg-center col-span-2 drop-shadow-xl tablet:bg-contact-us-banner tablet:col-span-1 tablet:row-span-2"></div>
        <div className="col-span-2 tablet:col-span-1 tablet:row-span-2">
          <ShopInfo />
        </div>
      </div>
    </section>
  );
}