import { getProductList, createProduct, deleteProduct } from "../api/getProductList";
// import { checkPermission } from "../api/admin";
import HeaderBack from "../components/HeaderBack";
import Pagination from "../components/Others/Pagination";
import EditModal from "../components/Others/EditModal";
import { GreenBtn } from "../components/Others/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BackProductListPage() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    unit: '',
    origin_price: '',
    price: '',
    image: '',
    is_enabled: false,
  })
  const [productData, setProductData] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const pageLength = productData?.length;
  const product_per_page = 10;
  const nPage = Math.ceil(pageLength / product_per_page);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const lastIndex = currentPage * product_per_page;
  const firstIndex = lastIndex - product_per_page;
  const product = productData.slice(firstIndex, lastIndex);

  const handleToggleOpen = () => {
    setIsToggle(true);
  };
  const handleToggleClose = () => {
    setIsToggle(false);
  };
  const handleNextClick = () => {
    if (currentPage !== 1) {
      return setCurrentPage(currentPage - 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage !== nPage) {
      return setCurrentPage(currentPage + 1);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handleProductDelete = async (id) => {
    console.log(id)
    try {
      await deleteProduct(id)
      setProductData((prevProduct) =>
        prevProduct.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error(error)
    }
  }
  const handleNewProductChange = async (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
    console.log(formData)
  }

  useEffect(() => {
    const getProductListAsync = async () => {
      const res = await getProductList();
      // console.log(data.data.products)
      const datas = res.data.products;
      // console.log(datas)
      const value = Object.values(datas);
      // console.log(value)
      setProductData(value);
    };
    getProductListAsync();
  }, []);
  // console.log(productData);
  // console.log(pageLength);

  return (
    <>
      <HeaderBack />
      {isToggle && <EditModal onToggleClose={handleToggleClose} data={formData} onChange={handleNewProductChange}/>}
      <section className="pt-16 px-16">
        <div className="flex justify-end">
          <button
            className="bg-warning text-black-100 font-medium rounded px-3 py-1 mb-4 text-xs hover:font-bold hover:drop-shadow-lg tablet:text-sm"
            onClick={handleToggleOpen}
          >
            Add New Product
          </button>
        </div>
        <table className="w-full text-center">
          <tr className="bg-beige-100">
            <th className="">Category</th>
            <th className="">Name</th>
            <th className="">Cost</th>
            <th className="">Price</th>
            <th className="">Adjust</th>
          </tr>
          {product.map((item) => {
            // console.log(item)
            return (
              <tr
                className="border-b border-beige-100 hover:bg-beige-15 cursor-pointer"
                key={item.id}
              >
                <td className="py-2">{item.category}</td>
                <td className="py-2">{item.title}</td>
                <td className="py-2">{item.origin_price}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">
                  <GreenBtn>Edit</GreenBtn>
                  <button className="rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100 ml-1" onClick={() => handleProductDelete ?.(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        <div className="flex justify-center">
          <Pagination
            numbers={numbers}
            currentPage={currentPage}
            onNextClick={handleNextClick}
            onPrevClick={handlePrevClick}
            onPageClick={handlePageClick}
          />
        </div>
      </section>
    </>
  );
}
