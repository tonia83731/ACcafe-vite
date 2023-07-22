



export default function Subscribe(){
  return (
    <form
      action=""
      className="w-1/6 min-w-[210px] mx-auto flex flex-col tablet:w-2/6 tablet:flex-row"
    >
      <label htmlFor="email" className=""></label>
      <input
        type="email"
        placeholder="Subscribe to our newsletter"
        className="h-7 text-xs pl-4 rounded-full my-2 text-black-80 tablet:h-9 tablet:w-full tablet:my-0 tablet:rounded-none tablet:rounded-s-full"
      />
      <button className="bg-black-100 h-7 rounded-full w-32 mx-auto tablet:h-9 tablet:rounded-none tablet:rounded-e-full">
        Subscribe
      </button>
    </form>
  );
}