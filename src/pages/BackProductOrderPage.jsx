import HeaderBack from "../components/HeaderBack";
import { useState, useEffect } from "react";
import { getOrderList, deleteOrder } from "../api/getOrderList";
import Pagination from "../components/Others/Pagination";

export default function BackProductOrderPage() {
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderData, setOrderData] = useState([]);
  const [allData, setAllData] = useState([]);
  const totalPage = pagination?.total_pages;
  const numbers = [...Array(totalPage).keys()].map((i) => i + 1);

  const handleNextClick = async () => {
    const page = currentPage - 1;
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    try {
      const res = await getOrderList(page);
      const datas = res.data.orders;
      setOrderData(datas);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePrevClick = async () => {
    const page = currentPage + 1;
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
    try {
      const res = await getOrderList(page);
      const datas = res.data.orders;
      setOrderData(datas);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePageClick = async (page) => {
    setCurrentPage(page);
    try {
      const res = await getOrderList(page);
      const datas = res.data.orders;
      setOrderData(datas);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteOneOrder = async (id) => {
    // console.log(id);
    try {
      await deleteOrder(id);
      setOrderData((prevOrder) => {
        prevOrder.filter((order) => order.id !== id);
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getOrderListAsync = async () => {
      const res = await getOrderList();
      const orders = res.data.orders;
      const pages = res.data.pagination;
      console.log(orders)
      setOrderData(orders);
      setPagination(pages);
    };
    getOrderListAsync();
  }, []);

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
          {orderData?.map((order) => {
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
                  <ul key={order.id}>
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
                  <button
                    className="rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100 ml-1"
                    onClick={() => handleDeleteOneOrder?.(order.id)}
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
