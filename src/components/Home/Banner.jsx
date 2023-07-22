import { GreenBtn } from "../Others/Button";
import {Link} from 'react-router-dom';



export default function HomeBanner() {
  return (
    <section id="home-banner" className="px-4 py-4">
      <div className="grid gap-4 grid-cols-4 grid-rows-banner-4">
        <div className="relative bg-main-banner bg-no-repeat bg-cover bg-center py-4 col-start-1 col-end-5 row-start-1 row-end-3 drop-shadow-xl flex flex-col justify-end items-end text-end tablet:col-end-4 tablet:row-end-5 tablet:justify-center tablet:items-start tablet:text-left">
          <h3 className="title text-olive-100 font-bold text-2xl px-4 z-10 tablet:text-3xl">
            New Product Launched
          </h3>
          <p className="text-olive-100 font-bold text-base px-4 z-10 tablet:text-xl">
            Get 30% off to be the first one to try Berry Party Set.
          </p>
          <Link to="/menu" className="px-4 mt-1 z-10">
            <GreenBtn>Go to Menu</GreenBtn>
          </Link>
          <div className="absolute bottom-0 bg-white-60 w-full h-3/5 tablet:h-2/5 tablet:top-1/2 tablet:translate-y-[-50%]"></div>
        </div>
        <div className="text-white-100 bg-left-top-banner bg-no-repeat bg-cover bg-center p-4 col-span-2 row-start-3 row-end-5 drop-shadow-xl flex flex-col justify-end items-end text-right tablet:col-start-4 tablet:col-end-5 tablet:row-start-1 tablet:row-end-3 tablet:items-start tablet:text-left">
          <h5 className="title text-xl font-bold">
            Summer Vacation Special Deal!
          </h5>
          <Link to="/news" className="mt-1 tablet:self-end">
            <GreenBtn>More</GreenBtn>
          </Link>
          <div className=""></div>
        </div>
        <div className="text-white-100 bg-right-bottom-banner bg-no-repeat bg-cover bg-center p-4 col-span-2 row-start-3 row-end-5 drop-shadow-xl flex flex-col justify-end items-end text-right tablet:col-start-4 tablet:col-end-5 tablet:row-start-3 tablet:row-end-5 tablet:items-start tablet:text-left">
          <h5 className="title text-xl font-bold">New Branch Opened!</h5>
          <Link to="/news" className="mt-1 tablet:self-end">
            <GreenBtn>More</GreenBtn>
          </Link>
          <div className="sub-background-white"></div>
        </div>
      </div>
    </section>
  );
}
