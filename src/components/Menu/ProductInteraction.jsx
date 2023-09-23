import { ReactComponent as Grid } from "../../assets/icon/menu/grid.svg";
import { ReactComponent as List } from "../../assets/icon/menu/Vector.svg";

const modeOptionsData = [
  {
    id: "grid",
    icon: <Grid />,
  },
  {
    id: "list",
    icon: <List />,
  },
];

export default function ProductInteraction({ onModeChange, inputValue, onProductChange, onSearchSubmit }) {
  const modeOptionsItems = modeOptionsData.map((item) => {
    return (
      <div key={item.id}>
        <input
          type="radio"
          className="peer hidden"
          name="mode"
          id={item.id}
          value={item.id}
          defaultChecked={item.id === "grid"}
          onChange={() => onModeChange?.(item.id)}
        />
        <label
          htmlFor={item.id}
          className={`cursor-pointer flex justify-center items-center w-10 py-1 bg-grullo-60 rounded hover:bg-gold-60 peer-checked:bg-gold-60 peer-checked:drop-shadow-md ${item.id==="list" ? "ml-2" : ""}`}
        >
          <div className="mode-icon">{item.icon}</div>
        </label>
      </div>
    );
  })
  return (
    <div className="flex justify-between items-center">
      <div className="flex">{modeOptionsItems}</div>
      <form action="" className="" onSubmit={onSearchSubmit}>
        <input
          type="text"
          className="w-[80px] breakpoint5:w-[auto] rounded border py-2 px-1 tablet:px-3"
          placeholder="Type to search product..."
          value={inputValue}
          onChange={(e) => onProductChange?.(e.target.value)}
        />
        <button className="ml-1 breakpoint5:ml-2 p-2 rounded bg-grullo-60 hover:drop-shadow-md hover:bg-grullo-100">
          Search
        </button>
      </form>
    </div>
  );
}
