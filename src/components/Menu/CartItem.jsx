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
        <div className="flex justify-between items-center">
          <div className="">${product.price}</div>
          <div className="w-2/4">
            <button className="text-lg" onClick={onMinusClick}>
              -
            </button>
            <input
              type="text"
              className="w-3/12 bg-white-40 text-olive-60 rounded text-center mx-2"
              pattern="[0-9]*"
              value={prop.qty}
              disabled
            />

            <button className="text-lg" onClick={onPlusClick}>
              +
            </button>
          </div>
          <div className="">${prop.final_total}</div>
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