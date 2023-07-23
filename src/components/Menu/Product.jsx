import ProductInteraction from "./ProductInteraction";
import ProductCard from "./ProductGrid";
import ProductList from "./ProductList";
import Pagination from "../Others/Pagination";

import { dummyProductData } from "../../data/ProductData";

import { useState } from "react";


export default function Product(){
  const [mode, setMode] = useState("grid")
  const [searchValue, setSearchValue] = useState("")
  const [productList, setProductList] = useState(dummyProductData)
  
  const handleModeChange = (id) => {
    // console.log(id)
    setMode(id)
  }
  const handleProductChange = (value) => {
    setSearchInput(value)
    // console.log(searchInput)
  }
  const handleSearchSubmit = () => {
    e.preventDefault();
    const filterProduct = productList.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
    
    if (filterProduct.length === 0) return setProductList(dummyProductData);
    setSearchValue(""); 
    return setProductList(filterProduct);
  }
  // console.log(productList);
  return (
    <section id="product" className="mt-8 mb-12">
      <div className="desktop:max-w-[1200px] desktop:mx-auto">
        <div className="px-4">
          <div className="title text-2xl font-bold mb-4 tablet:text-3xl">
            Product Menu
          </div>
          <ProductInteraction onModeChange={handleModeChange} inputValue={searchValue} onProductChange={handleProductChange} onSearchSubmit={handleSearchSubmit}/>
          {mode === "grid" ? <ProductCard /> : <ProductList />}
          {/* <ProductCard /> */}
          {/* <ProductList /> */}
          <Pagination className="text-center" />
        </div>
      </div>
    </section>
  );
}