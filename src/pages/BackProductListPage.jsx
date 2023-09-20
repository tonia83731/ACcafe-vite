import { getProductList } from "../api/getProductList";
import HeaderBack from "../components/HeaderBack"
import Pagination from "../components/Others/Pagination";
import EditModal from "../components/Others/EditModal";
import { GreenBtn } from "../components/Others/Button";
import { useEffect, useState } from "react";

export default function BackProductListPage(){
  const arr = [1, 2, 3, 4, 5]

  // useEffect(() => {
  //   const getProductListAsync = async () => {
  //     const data = await getProductList();
  //     console.log(data);
  //   }
  //   getProductListAsync();
  // }, [])
  return (
    <>
      <HeaderBack />
      <EditModal/>
      <section className="pt-16 px-16">
        <div className="flex justify-end">
          <button className="bg-warning text-black-100 font-medium rounded px-3 py-1 mb-4 text-xs hover:font-bold hover:drop-shadow-lg tablet:text-sm">
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
          <tr className="border-b border-beige-100 hover:bg-beige-15 cursor-pointer">
            <td className="py-2">Food</td>
            <td className="py-2">Yogurt with Bake Granola and Fruits</td>
            <td className="py-2">100</td>
            <td className="py-2">150</td>
            <td className="py-2">
              <GreenBtn>Edit</GreenBtn>
              <button className="rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100 ml-1">
                Delete
              </button>
            </td>
          </tr>
        </table>
        <div className="flex justify-center">
          <Pagination numbers={arr} />
        </div>
      </section>
    </>
  );
}