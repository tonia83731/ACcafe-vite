import HeaderBack from "../components/HeaderBack"
import Pagination from "../components/Others/Pagination";

export default function BackProductListPage(){
  const arr = [1, 2, 3, 4, 5]
  return (
    <>
      <HeaderBack />
      <section className="">
        <button className="">Add New Product</button>
        <table className="">
          <tr className="">
            <th className="">Category</th>
            <th className="">Name</th>
            <th className="">Price</th>
            <th className="">Sale Price</th>
            <th className="">Edit && Delete</th>
          </tr>
          <tr>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
          </tr>
        </table>
        <Pagination numbers={arr}/>
      </section>
    </>
  );
}