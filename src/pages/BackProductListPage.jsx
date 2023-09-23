import { getProductList, createProduct, deleteProduct, editProduct } from "../api/getProductList";
// import { checkPermission } from "../api/admin";
import HeaderBack from "../components/HeaderBack";
import Pagination from "../components/Others/Pagination";
import EditModal from "../components/Others/EditModal";
import { GreenBtn } from "../components/Others/Button";
import { useEffect, useState } from "react";

export default function BackProductListPage() {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    unit: '',
    origin_price: 0,
    price: 0,
    imageUrl: '',
    is_enabled: false,
  })
  const [productData, setProductData] = useState([]);
  const [isToggle, setIsToggle] = useState(false);
  const [isEditToggle, setIsEditToggle] = useState(false);
  const [tempID, setTempID] = useState('')
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
  const handleNewProductChange = (e) => {
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    let value = ""
    if(e.target.type === 'checkbox') value = e.target.checked
    else if (e.target.type === 'number') value = Number(e.target.value)
    else value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
    // console.log(formData)
  }
  const handleProductSubmit = async (e) => {
    e.preventDefault()
    // console.log(formData)
    // console.log(typeof formData.origin_price)
    try {
      const data = await createProduct({
       data: formData
      });
      if(data.success){
        setFormData({
          title: "",
          description: "",
          category: "",
          unit: "",
          origin_price: 0,
          price: 0,
          imageUrl: "",
          is_enabled: false,
        });
        setIsToggle(false)
        setProductData((prevData) => {
          return [
            ...prevData,
            formData
          ]
        })
        // window.location.reload();
      }
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  const handleEditProductOpen = (id) => {
    const product = productData.filter((item) => item.id === id)
    const item = product[0]
    setTempID(item.id)
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      unit: item.unit,
      origin_price: item.origin_price,
      price: item.price,
      imageUrl: item.imageUrl,
      is_enabled: item.is_enabled,
    });
    // console.log(formData)
    setIsEditToggle(true)
    // console.log(tempID)
  }
  const handleEditToggleClose = () => {
    setIsEditToggle(false)
  }
  const handleEditProductChange = (e) => {
     let value = "";
     if (e.target.type === "checkbox") value = e.target.checked;
     else if (e.target.type === "number") value = Number(e.target.value);
     else value = e.target.value;
     setFormData({
       ...formData,
       [e.target.name]: value,
     });
    //  console.log(formData);
  }
  const handleEditProductSubmit = async (e) => {
    e.preventDefault()
    // console.log(tempID)
    try {
      const data = await editProduct({
       data: formData
      }, tempID)
      if (data.success) {
        setIsEditToggle(false);
        setFormData({
          title: "",
          description: "",
          category: "",
          unit: "",
          origin_price: 0,
          price: 0,
          imageUrl: "",
          is_enabled: false,
        });
        window.location.reload();
      }
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const getProductListAsync = async () => {
      const res = await getProductList();
      // console.log(data.data.products)
      const datas = res.data.products;
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
      {isToggle && (
        <EditModal
          onToggleClose={handleToggleClose}
          data={formData}
          onChange={handleNewProductChange}
          onProductSubmit={handleProductSubmit}
        />
      )}
      {isEditToggle && (
        <EditModal
          onToggleClose={handleEditToggleClose}
          data={formData}
          onChange={handleEditProductChange}
          onProductSubmit={handleEditProductSubmit}
        />
      )}
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
                <td className="py-2 text-left">{item.title}</td>
                <td className="py-2">{item.origin_price}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">
                  <GreenBtn onClick={() => handleEditProductOpen?.(item.id)}>
                    Edit
                  </GreenBtn>
                  <button
                    className="rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100 ml-1"
                    onClick={() => handleProductDelete?.(item.id)}
                  >
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
