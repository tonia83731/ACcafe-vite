import ProductInteraction from "./ProductInteraction";
import ProductCard from "./ProductGrid";
import ProductList from "./ProductList";
import Pagination from "../Others/Pagination";

import { dummyProductData } from "../../data/ProductData";
import { getFrontProductList } from "../../api/getFrontProductList";

import { useState, useEffect } from "react";
import useCartContext from "../../hooks/useCartContext";
import useWishContext from "../../hooks/useWishContext";

export default function Product({ onAddWishClick, isWish }) {
  // console.log(useCartContext())
  // console.log(useWishContext())
  // const wishInfo = useWishContext();
    

  const [mode, setMode] = useState("grid");
  const [searchValue, setSearchValue] = useState("");
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productPerPage = 8;
  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const product = productList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(productList.length / productPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  // grid and list switch
  const handleModeChange = (id) => {
    // console.log(id)
    setMode(id);
  };

  // search input
  const handleProductChange = (value) => {
    // console.log(value);
    setSearchValue(value);
    // console.log(searchInput)
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue === "") return;
    const filterProduct = productList.filter((item) =>
      // console.log(item.title.toLowerCase().trim())
      item.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
    );

    if (filterProduct.length === 0) return;
    setProductList(filterProduct);
    setSearchValue("");
  };
  // pagination button
  const handleNextClick = () => {
    if (currentPage !== 1) {
      return setCurrentPage(currentPage - 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage !== npage) {
      return setCurrentPage(currentPage + 1);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // wish list here
  const handleAddWishClick = (id) => {
    console.log(id);
  };

  useEffect(() => {
    const getFrontProductListAsync = async () => {
      const res = await getFrontProductList()
      const data = res.products
      // console.log(data)
      setProductList(data)
    }
    getFrontProductListAsync()
  }, [])


  // console.log(productList);
  return (
    <section id="product" className="mt-8 mb-12">
      <div className="desktop:max-w-[1200px] desktop:mx-auto">
        <div className="px-4">
          <div className="title text-2xl font-bold mb-4 tablet:text-3xl">
            Product Menu
          </div>
          <ProductInteraction
            onModeChange={handleModeChange}
            inputValue={searchValue}
            onProductChange={handleProductChange}
            onSearchSubmit={handleSearchSubmit}
          />
          {mode === "grid" ? (
            <ProductCard
              props={product}
              isWish={isWish}
            />
          ) : (
            <ProductList
              props={product}
              isWish={isWish}
            />
          )}
          {/* <ProductCard /> */}
          {/* <ProductList /> */}
          <Pagination
            className="text-center"
            numbers={numbers}
            currentPage={currentPage}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
            onPageClick={handlePageClick}
          />
        </div>
      </div>
    </section>
  );
}
