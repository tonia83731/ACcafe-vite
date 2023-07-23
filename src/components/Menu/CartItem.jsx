

export default function CartItem(){
  return (
    <div className="flex justify-between items-center border-b-2 border-grullo-60 py-2 px-1">
      <div className="">
        <div className="text-lg">Yogurt with Bake Granola and Fruits</div>
        <div className="flex justify-between items-center">
          <div className="">$200</div>
          <div className="w-2/4">
            <button className="text-lg">-</button>
            <input
              type="text"
              className="w-3/12 bg-white-40 text-olive-60 rounded text-center mx-2"
              pattern="[0-9]*"
              defaultValue="1"
            />
            <button className="text-lg">+</button>
          </div>
          <div className="">$200</div>
        </div>
      </div>
      <button className="text-2xl text-grullo-100 hover:text-olive-80">
        &#10799;
      </button>
    </div>
  );
}