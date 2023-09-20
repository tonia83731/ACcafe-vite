export default function EditFile() {
  return (
    <div className="flex flex-col w-full mb-2">
      <label htmlFor="" className="font-medium">
        Upload Image by File
      </label>
      <label
        htmlFor="back-imgFile"
        className="w-full rounded px-4 py-1 bg-white-80 border border-grullo-40  text-sm focus:border-2 focus:border-grullo-80 text-center"
      >
        <div className="w-[50%] my-10 mx-auto rounded px-3 py-1 text-xs bg-grullo-100 hover:font-bold text-white-100 cursor-pointer">
          Upload File
        </div>
      </label>
      <input type="file" className="hidden" id="back-imgFile" />
    </div>
  );
}
