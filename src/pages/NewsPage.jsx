import NewsOption from "../components/News/NewsOption"
import NewsList from "../components/News/NewsList";
import NewsModal from "../components/News/NewsModal";

import { dummyNewsData } from "../data/NewsData";

import { useState } from "react";


export default function NewsPage() {
  const [newsData, setNewsData] = useState(dummyNewsData);
  const [modalToggle, setModalToggle] = useState(false)
  const [modalContent, setModalContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1);

  const newsPerPage = 8;
  const lastIndex = currentPage * newsPerPage;
  const firstIndex = lastIndex - newsPerPage;
  const news = newsData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(newsData.length / newsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleOptionChange = (id) => {
    const SortByTime = dummyNewsData.sort(
      (a, b) => a.publish_date - b.publish_date
    );
    if (id === "all") {
      return setNewsData(SortByTime);
    } else {
      const newsType = SortByTime.filter((data) =>
        data.type.toLowerCase().includes(id)
      );

      return setNewsData(newsType);
    }
  }
  const handleNewsModalClick = (id) => {
    const filterContent = dummyNewsData.filter((prop) => prop.id === id)
    setModalContent(filterContent)
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

  const handlePageClick = (page) => {
    setCurrentPage(page)
  }

  return (
    <main className="mt-8 mb-12 desktop:max-w-[1200px] desktop:mx-auto">
      <section id="news" className="px-4 py-4">
        <div className="grid gap-4 grid-cols-4 grid-rows-banner-3">
          <div className="bg-news-banner bg-no-repeat bg-cover bg-center col-span-4"></div>
          <div className="col-span-4 tablet:col-span-1 tablet:row-span-3">
            <NewsOption onOptionsChange={handleOptionChange} />
          </div>
          <div className="col-span-4 tablet:col-start-2 tablet:col-span-3 tablet:row-span-3">
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
  );
}