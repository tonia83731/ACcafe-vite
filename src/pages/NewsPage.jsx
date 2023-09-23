import NewsOption from "../components/News/NewsOption"
import NewsList from "../components/News/NewsList";
import NewsModal from "../components/News/NewsModal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getFrontNewsList, getFrontOneNewsList } from "../api/getFrontNewsList";
import { getFrontProductCartList } from "../api/getFrontProductCart";
import { dummyNewsData } from "../data/NewsData";

import { useState, useEffect } from "react";


export default function NewsPage() {
  const [newsData, setNewsData] = useState([]);
  const [filterData, setFilterData] = useState([])
  const [pageData, setPageData] = useState(null)
  const [modalToggle, setModalToggle] = useState(false)
  const [modalContent, setModalContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0)
  const [cartData, setCartData] = useState([]);

  // const totalPage = pageData.total_pages
  // const numbers = [...Array(totalPage).keys()].map((i) => i + 1);
  
  const newsPerPage = 8;
  const lastIndex = currentPage * newsPerPage;
  const firstIndex = lastIndex - newsPerPage;
  const news = filterData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filterData.length / newsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleOptionChange = (id) => {
    const SortByTime = newsData.sort(
      (a, b) => a.publish_date - b.publish_date
    );

    if (id === "All") {
      setFilterData(SortByTime);
    } else {
      const newsType = SortByTime.filter((data) =>
        data.author === id
      );
      setFilterData(newsType);
    }
  }
  const handleNewsModalClick = async (id) => {
    // const filterContent = dummyNewsData.filter((prop) => prop.id === id)
    const res = await getFrontOneNewsList(id)
    const data = res.data.article
    // console.log(data);
    setModalContent([data])
    // console.log(modalContent)
    // setModalContent(filterContent)
    setModalToggle(true)
  }
  const handleNextClick = () => {
    if (currentPage !== 1) {
      return setCurrentPage(currentPage - 1);
    }
  }
  const handlePrevClick = () => {
    if (currentPage !== npage) {
      return setCurrentPage(currentPage + 1);
    }
  }

  const handlePageClick = async (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const getFrontNewsListAsync = async () => {
      let page = 1;
      let allNews = [];
      let hasMoreData = true

      while (hasMoreData) {
        try {
          const res = await getFrontNewsList(page);
          const newsOnPage = res.articles;
          const totalPage = res.pagination.total_pages
          if (page > totalPage) {
            hasMoreData = false;
            break;
          } else {
            allNews = [...allNews, ...newsOnPage];
            page++;
          }
        } catch (error) {
          console.error(error);
          break;
        }
      }
      // console.log(allNews)
      setNewsData(allNews)
      setFilterData(allNews)
    }
    const getFrontProductCartListAsync = async () => {
      const res = await getFrontProductCartList();
      const datas = res.data.carts;
      // console.log(datas);
      setCartData(datas);
    };
    getFrontProductCartListAsync();
    getFrontNewsListAsync()
  }, [])
  console.log(newsData)

  return (
    <>
      <Header props={cartData} />
      <main className="mt-8 mb-12 desktop:max-w-[1200px] desktop:mx-auto">
        <section id="news" className="px-4 py-4">
          <div className="grid gap-4 grid-cols-4 grid-rows-banner-3">
            <div className="bg-news-banner bg-no-repeat bg-cover bg-center col-span-4"></div>
            <div className="col-span-4 tablet:col-span-1 tablet:row-span-3">
              <NewsOption onOptionsChange={handleOptionChange} />
            </div>
            <div className="col-span-4 mt-10 breakpoint5:mt-4 tablet:mt-0 tablet:col-start-2 tablet:col-span-3 tablet:row-span-3">
              <NewsList
                props={news}
                onNewsModalClick={handleNewsModalClick}
                numbers={numbers}
                currentPage={currentPage}
                onNextClick={handleNextClick}
                onPrevClick={handlePrevClick}
                onPageClick={handlePageClick}
              />
            </div>
          </div>
        </section>
        {modalToggle && (
          <NewsModal
            props={modalContent}
            onModalClick={() => setModalToggle(false)}
          />
        )}
      </main>
      <Footer />
    </>
  );
}