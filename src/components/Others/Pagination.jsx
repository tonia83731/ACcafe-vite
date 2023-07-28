


export default function Pagination({className, numbers, currentPage, onNextClick, onPrevClick, onPageClick}){
  return (
    <div className={`mt-4 ${className}`}>
      <a href="#" className="px-2 py-4 text-olive-100" onClick={onNextClick}>
        &#8249;
      </a>
      {numbers.map((page) => {
        return (
          <a
            href="#"
            className={`px-2 py-4 hover:font-bold ${
              page === currentPage
                ? "text-olive-100 font-bold"
                : "text-grullo-100"
            }`}
            key={page}
            onClick = {() => onPageClick?.(page)}
          >
            {page}
          </a>
        );
      })}
      <a
        href="#"
        className="px-2 py-4 text-olive-100 hover:font-bold"
        onClick={onPrevClick}
      >
        &#8250;
      </a>
    </div>
  );
}


{/* <a href="#" className="px-2 py-4 text-grullo-100 hover:font-bold">
              2
            </a>
            <a href="#" className="px-2 py-4 text-grullo-100 hover:font-bold">
              3
            </a>
            <a href="#" className="px-2 py-4 text-grullo-100 hover:font-bold">
              4
            </a> */}