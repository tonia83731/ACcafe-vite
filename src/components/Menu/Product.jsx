import ProductInteraction from "./ProductInteraction";
import ProductCard from "./ProductGrid";
import ProductList from "./ProductList";
import Pagination from "../Others/Pagination";


export default function Product(){
  return (
    <section id="product" className="mt-8 mb-12">
      <div className="desktop:max-w-[1200px] desktop:mx-auto">
        <div className="px-4">
          <div className="title text-2xl font-bold mb-4 tablet:text-3xl">
            Product Menu
          </div>
          <ProductInteraction />
          {/* <ProductCard /> */}
          <ProductList/>
          <Pagination className="text-center" />
        </div>
      </div>
    </section>
  );
}