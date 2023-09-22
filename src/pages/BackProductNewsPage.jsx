import {
  getNewsList,
  createNews,
  editNews,
  deleteNews,
} from "../api/getNewsList";
import convertNumberToTime from "../utilites/convertNumberToTime";
import convertTimeToNumber from "../utilites/convertTimeToNumber";
import HeaderBack from "../components/HeaderBack";
import Pagination from "../components/Others/Pagination";
import EditNewsModal from "../components/Others/EditNewsModal";
import { GreenBtn } from "../components/Others/Button";
import { useEffect, useState } from "react";

export default function BackProductNewsPage() {
  const [news, setNews] = useState([]);
  const [newsData, setNewsData] = useState({
    image: "",
    title: "",
    author: "",
    create_at: 0,
    content: "",
    description: "",
    isPublic: false,
  });
  const [pagination, setPagination] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isToggle, setIsToggle] = useState(false);
  const [isEditToggle, setIsEditToggle] = useState(false);
  const [tempID, setTempID] = useState("");
  const totalPage = pagination?.total_pages;
  const numbers = [...Array(totalPage).keys()].map((i) => i + 1);

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
    if (currentPage !== totalPage) {
      return setCurrentPage(currentPage + 1);
    }
  };
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const handleNewsChange = (e) => {
    let value = "";
    if (e.target.type === "checkbox") value = e.target.checked;
    else if (e.target.type === "date")
      value = convertTimeToNumber(e.target.value);
    else value = e.target.value;
    setNewsData({
      ...newsData,
      [e.target.name]: value,
    });
    // console.log(newsData)
  };
  const handleNewsSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createNews({
        data: newsData,
      });
      // console.log(data);
      if (data.success) {
        setNewsData({
          image: "",
          title: "",
          author: "",
          create_at: 0,
          content: "",
          description: "",
          isPublic: false,
        });
        setIsToggle(false);
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleNewsDelete = async (id) => {
    // console.log(id)
    try {
      await deleteNews(id)
      setNews((prevNews) => prevNews.filter((news) => news.id !== id))
    } catch (error) {
      console.error(error)
    }
  };
  const handleEditNewsOpen = (id) => {
    const oneNews = news.filter((item) => item.id === id)
    const item = oneNews[0]
    const date = new Date(item.create_at)
    const inputData = date.toISOString().split("T")[0];
    // console.log(item.title)
    // console.log(inputData)
    setTempID(item.id)
    // console.log(tempID)
    setNewsData({
      image: item.image,
      title: item.title,
      author: item.author,
      create_at: inputData,
      content: item.content,
      description: item.description,
      isPublic: item.isPublic,
    });
    setIsEditToggle(true)
  }
  const handleEditToggleClose = () => {
    setIsEditToggle(false)
  }
  const handleEditNewsChange = (e) => {
     let value = "";
     if (e.target.type === "checkbox") value = e.target.checked;
     else if (e.target.type === "date")
       value = convertTimeToNumber(e.target.value);
     else value = e.target.value;
     setNewsData({
       ...newsData,
       [e.target.name]: value,
     });
  }
  const handleEditNewsSubmit = async (e) => {
    e.preventDefault()
    console.log(tempID)
    // try {
    //   const data = await editNews({
    //     data: newsData
    //   }, tempID)
    //   console.log(data)
    // } catch (error){
    //   console.error(error)
    // }
  }

  useEffect(() => {
    const getNewsListAsync = async () => {
      const res = await getNewsList(currentPage);
      const datas = res.data.articles;
      const pages = res.data.pagination;
      setNews(datas);
      setPagination(pages);
    };
    getNewsListAsync();
  }, []);

  // console.log(pagination)
  return (
    <>
      <HeaderBack />
      {isToggle && (
        <EditNewsModal
          onToggleClose={handleToggleClose}
          data={newsData}
          onChange={handleNewsChange}
          onSubmit={handleNewsSubmit}
        />
      )}
      {isEditToggle && (
        <EditNewsModal
          onToggleClose={handleEditToggleClose}
          data={newsData}
          onChange={handleEditNewsChange}
          onSubmit={handleEditNewsSubmit}
        />
      )}
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
            <th className="">Event Date</th>
            <th className="">Published</th>
            <th className="">Adjust</th>
          </tr>
          {news.map((item) => {
            return (
              <tr
                className="border-b border-beige-100 hover:bg-beige-15 cursor-pointer"
                key={item.id}
              >
                <td className="py-2">{item.author}</td>
                <td className="py-2">{item.title}</td>
                <td className="py-2">{convertNumberToTime(item.create_at)}</td>
                <td className="py-2">
                  {item.isPublic === true ? "Published" : "Unpublished"}
                </td>
                <td className="py-2">
                  <GreenBtn onClick={() => handleEditNewsOpen?.(item.id)}>
                    Edit
                  </GreenBtn>
                  <button
                    className="rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold tablet:text-sm text-white-100 ml-1"
                    onClick={() => handleNewsDelete?.(item.id)}
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
