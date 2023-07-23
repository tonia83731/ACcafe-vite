import NewsOption from "../components/News/NewsOption"
import NewsList from "../components/News/NewsList";
import NewsModal from "../components/News/NewsModal";

import { dummyNewsData } from "../data/NewsData";

import { useState } from "react";


export default function NewsPage() {
  const [newsData, setNewsData] = useState(dummyNewsData);
  const handleOptionChange = (id) => {
    console.log(id)
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
  return (
    <main className="mt-8 mb-12 desktop:max-w-[1200px] desktop:mx-auto">
      <section id="news" className="px-4 py-4">
        <div className="grid gap-4 grid-cols-4 grid-rows-banner-3">
          <div className="bg-news-banner bg-no-repeat bg-cover bg-center col-span-4"></div>
          <div className="col-span-4 tablet:col-span-1 tablet:row-span-3">
            <NewsOption onOptionsChange={handleOptionChange}/>
          </div>
          <div className="col-span-4 tablet:col-start-2 tablet:col-span-3 tablet:row-span-3">
            <NewsList props={newsData} />
          </div>
        </div>
      </section>
      {/* <NewsModal/> */}
    </main>
  );
}