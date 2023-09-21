import EditInput from "./EditInput";
import EditFile from "./EditFile";
import EdiTextArea from "./EditTextArea";

export default function EditModal({ onToggleClose, onChange, data }) {
  return (
    <div className="bg-white-100 w-8/12 min-w-[600px] fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] rounded-md shadow-lg">
      <div className="flex justify-between items-center bg-grullo-80 py-2 px-4 rounded-t-lg">
        <div className="font-bold">Product Form</div>
        <button
          className="text-2xl text-black-60 hover:text-black-100"
          onClick={onToggleClose}
        >
          &#215;
        </button>
      </div>
      <form action="" className="px-8 py-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <EditInput
              name="image"
              type="url"
              className="imgUrl"
              label="Upload Image by URL"
              placeholder="Enter image url here..."
              isRequired={false}
              onChange={onChange}
              inputValue={data.image}
            />
            <EditFile />
          </div>
          <div className="col-span-2">
            <EditInput
              name="title"
              className="name"
              label="Product Name"
              placeholder="Enter product name here..."
              isRequired={true}
              onChange={onChange}
              inputValue={data.title}
            />
            <EdiTextArea
              name="description"
              className="description"
              label="Description"
              placeholder="Enter product description here..."
              isRequired={false}
              onChange={onChange}
              inputValue={data.description}
            />
            <div className="flex">
              <EditInput
                name="category"
                className="category"
                label="Category"
                placeholder="Enter product category here..."
                isRequired={true}
                onChange={onChange}
                inputValue={data.category}
              />
              <span className="mx-1"></span>
              <div className="mb-2">
                <label htmlFor="back-icon-select" className="font-medium">
                  Icon Type <span className="text-error">*</span>
                </label>
                <select
                  name="unit"
                  id="back-icon-select"
                  className="w-full rounded px-4 py-1 bg-white-80 border border-grullo-40  text-sm focus:border-2 focus:border-grullo-80"
                  onChange={onChange}
                  value={data.unit}
                  required
                >
                  <option value="" selected disabled hidden>
                    Select icon type...
                  </option>
                  <option value="Food">Food</option>
                  <option value="ColdDrink">ColdDrink</option>
                  <option value="HotDrink">HotDrink</option>
                  <option value="Soup">Soup</option>
                  <option value="Cocktail">Cocktail</option>
                  <option value="Beer">Beer</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <EditInput
                name="origin_price"
                type="number"
                className="cost"
                label="Product Cost"
                placeholder="Enter product cost here..."
                isRequired={true}
                onChange={onChange}
                inputValue={data.origin_price}
              />
              <span className="mx-1"></span>
              <EditInput
                name="price"
                type="number"
                className="price"
                label="Product Price"
                placeholder="Enter product price here..."
                isRequired={true}
                onChange={onChange}
                inputValue={data.price}
              />
            </div>
            <div className="">
              <input
                type="checkbox"
                className="mr-2"
                id="product-ready"
                name="is_enabled"
                onChange={onChange}
                value={data.is_enabled}
              />
              <label htmlFor="product-ready">
                The product is ready to launch
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-black-20 text-black-60 font-medium rounded px-3 py-1 mb-4 text-xs hover:font-bold hover:drop-shadow-lg tablet:text-sm"
            onClick={onToggleClose}
          >
            Cancel
          </button>
          <span className="mx-1"></span>
          <button className="bg-warning text-black-100 font-medium rounded px-3 py-1 mb-4 text-xs hover:font-bold hover:drop-shadow-lg tablet:text-sm">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}