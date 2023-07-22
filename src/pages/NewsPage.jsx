import NewsOption from "../components/News/NewsOption"
import NewsList from "../components/News/NewsList";
import NewsModal from "../components/News/NewsModal";



export default function NewsPage() {
  return (
    <main className="mt-8 mb-12 desktop:max-w-[1200px] desktop:mx-auto">
      <section id="news" className="px-4 py-4">
        <div className="grid gap-4 grid-cols-4 grid-rows-banner-3">
          <div className="bg-news-banner bg-no-repeat bg-cover bg-center col-span-4"></div>
          <div className="col-span-4 tablet:col-span-1 tablet:row-span-3">
            <NewsOption />
          </div>
          <div className="col-span-4 tablet:col-start-2 tablet:col-span-3 tablet:row-span-3">
            <NewsList />
          </div>
        </div>
      </section>
      {/* <NewsModal/> */}
    </main>
  );
}