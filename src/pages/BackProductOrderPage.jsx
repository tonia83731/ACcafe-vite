import HeaderBack from "../components/HeaderBack"
import { useState, useEffect } from "react";
import { getOrderList, deleteOrder, deleteAllOrder } from "../api/getOrderList";
import Pagination from "../components/Others/Pagination";

export default function BackProductOrderPage(){
  const [currentPage, setCurrentPage] = useState(1);
  const [orderData, setOrderData] = useState([])
  const pageLength = orderData?.length;
  const product_per_page = 4;
  const nPage = Math.ceil(pageLength / product_per_page);
  const numbers = [...Array(nPage + 1).keys()].slice(1);
  const lastIndex = currentPage * product_per_page;
  const firstIndex = lastIndex - product_per_page;
  const order = orderData.slice(firstIndex, lastIndex);

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
   const handleDeleteOneOrder = async (id) => {
      console.log(id)
    try {
      await deleteOrder(id)
      setOrderData((prevOrder) => {
        prevOrder.filter((order) => order.id !== id)
      })
    } catch (error){
      console.error(error)
    }
   }

  useEffect(() => {
    const getOrderListAsync = async () => {
      let page = 1
      let allOrders = []
      let hasMoreData = true
      while (hasMoreData) {
        try {
          const res = await getOrderList()
          const ordersOnPage = res.data.orders
          const totalPage = res.data.pagination.total_pages
          if(page > totalPage) {
            hasMoreData = false
            break
          } else {
            allOrders = [...allOrders, ...ordersOnPage]
            page++
          }
        } catch (error) {
          console.error(error)
          break
        }
      }
      // console.log(allOrders)
      setOrderData(allOrders)
      // const res = await getOrderList()
      // const data = res.data.orders
      // setOrderData(data)
    }
    getOrderListAsync();
  }, [])

  // console.log(orderData)
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
          {order.map((order) => {
            const product = order.products;
            const values = Object.values(product);
            // console.log(values)

            return (
              <tr
                className="border-b border-beige-100 hover:bg-beige-15 cursor-pointer"
                key={order.id}
              >
                <td className="py-2">{order.num}</td>
                <td className="py-2 text-start">
                  <ul>
                    <li>Name: {order.user.name}</li>
                    <li>Address: {order.user.address}</li>
                    <li>Email: {order.user.email}</li>
                    <li>Tel: {order.tel}</li>
                  </ul>
                </td>
                <td className="py-2 text-start">
                  <ul>
                    {values.map((product) => {
                      return (
                        <>
                          <li key={product.id}>
                            {product.product.title} ✖ {product.qty}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </td>
                <td className="py-2">{order.total}</td>
                <td className="py-2">
                  {order.is_paid === true ? "Paid" : "Unpaid"}
                </td>
                <td className="py-2">
                  <button className="rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100 ml-1" onClick={() => handleDeleteOneOrder?.(order.id)}>
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