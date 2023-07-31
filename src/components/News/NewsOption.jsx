import nextId from "react-id-generator";


const newsOptionData = [
  {
    id: "all",
    name: "All Events",
  },
  {
    id: "storewide",
    name: "Storewide Events",
  },
  {
    id: "branch",
    name: "Branch Events",
  },
  {
    id: "membership",
    name: "Membership",
  },
  {
    id: "collaboration",
    name: "Collaborations",
  },
  {
    id: "other",
    name: "Others",
  },
];

export default function NewsOption({onOptionsChange}) {
  const newsOptionItems = newsOptionData.map((item) => {
    return (
      <div className="mx-1 my-4 tablet:mt-1 tablet:mb-5 tablet:w-full" key={item.id}>
        <input
          type="radio"
          className="peer hidden"
          name="news"
          id={item.id}
          value={item.id}
          defaultChecked={item.id === "all"}
          onChange={() => onOptionsChange?.(item.id)}
        />
        <label
          htmlFor={item.id}
          className="my-[1.5em] rounded-full p-2 text-grullo-100 border border-gold-80 cursor-pointer hover:bg-gold-60 hover:text-white-100 peer-checked:bg-gold-100 peer-checked:text-white-100 tablet:block tablet:min-w-[120px] tablet:w-full tablet:my-0"
        >
          {item.name}
        </label>
      </div>
    );
  });
  return (
    <div className="mb-6 h-full w-full text-center flex flex-wrap justify-center items-center tablet:flex-col tablet:justify-start tablet:mb-0">
      {newsOptionItems}
    </div>
  );
}
