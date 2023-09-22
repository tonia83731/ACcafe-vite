import EditInput from "./EditInput";
import EditFile from "./EditFile";
import EdiTextArea from "./EditTextArea";

export default function EditNewsModal({ onToggleClose, onChange, onSubmit, data }) {
  return (
    <div className="bg-white-100 w-8/12 min-w-[600px] fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] rounded-md shadow-lg">
      <div className="flex justify-between items-center bg-grullo-80 py-2 px-4 rounded-t-lg">
        <div className="font-bold">News Form</div>
        <button
          className="text-2xl text-black-60 hover:text-black-100"
          onClick={onToggleClose}
        >
          &#215;
        </button>
      </div>
      <form action="" className="px-8 py-4" onSubmit={onSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <EditInput
              name="image"
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
            <div className="flex">
              <EditInput
                name="title"
                className="news-title"
                label="News Title"
                placeholder="Enter news title here..."
                isRequired={true}
                onChange={onChange}
                inputValue={data.title}
              />
              <span className="mx-1"></span>
              <div className="mb-2">
                <label htmlFor="back-icon-select" className="font-medium">
                  Category <span className="text-error">*</span>
                </label>
                <select
                  name="author"
                  id="back-icon-select"
                  className="w-full rounded px-4 py-1 bg-white-80 border border-grullo-40  text-sm focus:border-2 focus:border-grullo-80"
                  onChange={onChange}
                  value={data.author}
                  required
                >
                  <option value="" selected disabled hidden>
                    Select category...
                  </option>
                  <option value="Storewide">StoreWide Events</option>
                  <option value="Branch">Branch Events</option>
                  <option value="Membership">Membership</option>
                  <option value="Collaboration">Collaborations</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            <EditInput
              name="create_at"
              className="news-date"
              type="date"
              label="Date"
              isRequired={true}
              onChange={onChange}
              inputValue={data.create_at}
            />
            <EditInput
              name="content"
              className="news-location"
              label="Location"
              placeholder="Enter address here..."
              isRequired={true}
              onChange={onChange}
              inputValue={data.content}
            />
            <EdiTextArea
              name="description"
              className="news-info"
              label="Description"
              placeholder="Enter description here..."
              maxlength="200"
              isRequired={true}
              onChange={onChange}
              inputValue={data.description}
            />
            <div>
              <input
                name="isPublic"
                type="checkbox"
                className="mr-2"
                id="product-ready"
                onChange={onChange}
                checked={data.isPublic}
              />
              <label htmlFor="product-ready">
                The news is ready to published
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
