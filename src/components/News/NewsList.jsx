import { dummyNewsData } from "../../data/NewsData";
import Pagination from "../Others/Pagination";
import convertNumberToTime from "../../utilites/convertNumberToTime";

export default function NewsList({
  props,
  onNewsModalClick,
  numbers,
  currentPage,
  onNextClick,
  onPrevClick,
  onPageClick
}) {
  return (
    <section id="news-list">
      <ul className="news-list">
        {props.map((item) => {
          return (
            <li
              className="text-start border-b-2 border-grullo-60 px-2 py-0.5 hover:bg-black-5"
              key={item.id}
            >
              <button
                className="title font-bold text-lg text-start"
                onClick={() => onNewsModalClick?.(item.id)}
                // onClick={() => changeContent(item)}
              >
                {item.title}
              </button>
              <p className="news-item-date">
                Event date: <span className="news-date">{convertNumberToTime(item.create_at)}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <Pagination
        className="text-right"
        numbers={numbers}
        currentPage={currentPage}
        onNextClick={onNextClick}
        onPrevClick={onPrevClick}
        onPageClick={onPageClick}
      />
    </section>
  );
}
