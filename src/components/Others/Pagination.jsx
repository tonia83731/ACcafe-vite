


export default function Pagination({className}){
  return (
    <div className={`mt-4 ${className}`}>
      <a href="#" className="px-2 py-4 text-olive-100">
        &#8249;
      </a>
      <a
        href="#"
        className="px-2 py-4 text-olive-100 font-bold hover:font-bold"
      >
        1
      </a>
      <a href="#" className="px-2 py-4 text-grullo-100 hover:font-bold">
        2
      </a>
      <a href="#" className="px-2 py-4 text-grullo-100 hover:font-bold">
        3
      </a>
      <a href="#" className="px-2 py-4 text-grullo-100 hover:font-bold">
        4
      </a>
      <a href="#" className="px-2 py-4 text-olive-100 hover:font-bold">
        &#8250;
      </a>
    </div>
  );
}