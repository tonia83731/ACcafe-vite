import { getNewsList } from "../api/getNewsList";
import HeaderBack from "../components/HeaderBack";
import Pagination from "../components/Others/Pagination";
import EditNewsModal from "../components/Others/EditNewsModal";
import { GreenBtn } from "../components/Others/Button";
import { useEffect, useState } from "react";

export default function BackProductNewsPage() {
  const [news, setNews] = useState([])
  const [isToggle, setIsToggle] = useState(false);
  const arr = [1, 2, 3, 4, 5];

  const handleToggleOpen = () => {
    setIsToggle(true);
  };
  const handleToggleClose = () => {
    setIsToggle(false);
  };
   useEffect(() => {
     const getNewsListAsync = async () => {
       const res = await getNewsList();
       const datas = res.data.articles
       console.log(datas)
     };
     getNewsListAsync();
   }, []);
  return (
    <>
      <HeaderBack />
      {isToggle && <EditNewsModal onToggleClose={handleToggleClose} />}
      <section className="pt-16 px-16">
        <div className="flex justify-end">
          <button
            className="bg-warning text-black-100 font-medium rounded px-3 py-1 mb-4 text-xs hover:font-bold hover:drop-shadow-lg tablet:text-sm"
            onClick={handleToggleOpen}
          >
            Add News
          </button>
        </div>
        <table className="w-full text-center">
          <tr className="bg-beige-100">
            <th className="">Category</th>
            <th className="">Title</th>
            <th className="">Date</th>
            <th className="">Adjust</th>
          </tr>
          <tr className="border-b border-beige-100 hover:bg-beige-15 cursor-pointer">
            <td className="py-2">Branch</td>
            <td className="py-2">Celebrate September</td>
            <td className="py-2">2020/10/12</td>
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
