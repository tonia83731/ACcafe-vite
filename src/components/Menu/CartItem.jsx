import { deleteOneCartProduct } from "../../api/getFrontProductCart";

export default function CartItem({prop, onPlusClick, onMinusClick, onRemoveClick}){
  const product = prop.product
  // console.log(prop)
  // const handleRemoveClick = async (id) => {
  //   console.log(id)
  //   try {
  //     await deleteOneCartProduct(id)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }
  return (
    <div className="flex justify-between items-center border-b-2 border-grullo-60 py-2 px-1">
      <div className="">
        <div className="text-lg">{product.title}</div>
        <div className="grid gap-1 grid-cols-4 items-center">
          <div className="">${product.price}</div>
          <div className="w-full flex justify-center">
            <button
              className="text-lg"
              onClick={() => onMinusClick?.(product.id)}
            >
              -
            </button>
            <input
              type="text"
              className="w-3/12 bg-white-40 text-olive-60 rounded text-center mx-2"
              pattern="[0-9]*"
              value={prop.qty}
              // onChange={onEditCartItemChange}
              disabled
            />
            <button
              className="text-lg"
              onClick={() => onPlusClick?.(product.id)}
            >
              +
            </button>
          </div>
          <div className="flex justify-center col-span-2">${prop.final_total}</div>
        </div>
      </div>
      <button
        className="text-2xl text-grullo-100 hover:text-olive-80"
        onClick={() => onRemoveClick?.(prop.id)}
      >
        &#10799;
      </button>
    </div>
  );
}