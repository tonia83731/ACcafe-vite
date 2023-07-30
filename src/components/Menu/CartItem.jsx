

export default function CartItem({prop, onPlusClick, onMinusClick, onRemoveClick}){
  return (
    <div className="flex justify-between items-center border-b-2 border-grullo-60 py-2 px-1">
      <div className="">
        <div className="text-lg">{prop.name}</div>
        <div className="flex justify-between items-center">
          <div className="">${prop.price}</div>
          <div className="w-2/4">
            <button className="text-lg" onClick={onMinusClick}>
              -
            </button>
            <input
              type="text"
              className="w-3/12 bg-white-40 text-olive-60 rounded text-center mx-2"
              pattern="[0-9]*"
              value={prop.quantity}
              disabled
            />

            <button className="text-lg" onClick={onPlusClick}>
              +
            </button>
          </div>
          <div className="">${prop.quantity * prop.price}</div>
        </div>
      </div>
      <button
        className="text-2xl text-grullo-100 hover:text-olive-80"
        onClick={onRemoveClick}
      >
        &#10799;
      </button>
    </div>
  );
}