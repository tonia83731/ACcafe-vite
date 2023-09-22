import HeaderBack from "../components/HeaderBack"
import { useState, useEffect } from "react";
import { getOrderList, deleteProduct, deleteAllProduct } from "../api/getOrderList";


export default function BackProductOrderPage(){
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderData, setOrderData] = useState([])
  useEffect(() => {
    const getOrderListAsync = async () => {
      const res = await getOrderList()
      console.log(res)
    }
    getOrderListAsync();
  }, [])
  return (
    <>
      <HeaderBack />
      <section className="pt-16 px-16">
        <table className="w-full text-center">
          <tr className="bg-beige-100">
            <th className="">NO.</th>
            <th className="">User Information</th>
            <th className="">Product List</th>
            <th className="">Total Price</th>
            <th className="">Paid Status</th>
            <th className="">Delete</th>
          </tr>
          <tr className="border-b border-beige-100 hover:bg-beige-15 cursor-pointer">
            <td className="py-2">1</td>
            <td className="py-2 text-start">
              <ul>
                <li>Address: "kaohsiung"</li>
                <li>Email: "test@gmail.com",</li>
                <li>Name: "test"</li>
                <li>Tel: "0912346768"</li>
              </ul>
            </td>
            <td className="py-2 text-start">
              <ul>
                <li>Product Name ✖ quantity</li>
                <li>Product Name ✖ quantity</li>
                <li>Product Name ✖ quantity</li>
              </ul>
            </td>
            <td className="py-2">1200</td>
            <td className="py-2">Paid</td>
            <td className="py-2">
              <button className="rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100 ml-1">
                Delete
              </button>
            </td>
          </tr>
        </table>
        <div className="flex justify-end">
          <button className="bg-error text-black-100 font-medium rounded px-3 py-1 mt-4 text-xs hover:font-bold hover:drop-shadow-lg tablet:text-sm">
            Delete All
          </button>
        </div>
      </section>
    </>
  );
}