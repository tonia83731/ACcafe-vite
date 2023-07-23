import { dummyNewsData } from "../../data/NewsData";
import Pagination from "../Others/Pagination";

export default function NewsList({ props }) {
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
                // onClick={() => changeContent(item)}
              >
                {item.title}
              </button>
              <p className="news-item-date">
                Event date: <span className="news-date">{item.event_date}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <Pagination className="text-right" />
    </section>
  );
}
