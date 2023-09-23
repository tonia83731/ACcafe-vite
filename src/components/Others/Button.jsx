



export function GreenBtn({children, className, onClick}){
  return (
    <button
      className={`bg-gold-100 text-white-100 rounded px-3 py-1 text-[10px] breakpoint5:text-xs hover:bg-olive-100 hover:font-bold hover:drop-shadow-lg tablet:text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}