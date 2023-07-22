



export function GreenBtn({children, className}){
  return (
    <button className={`bg-gold-100 text-white-100 rounded px-3 py-1 text-xs hover:bg-olive-100 hover:font-bold hover:drop-shadow-lg tablet:text-sm ${className}`}>
      {children}
    </button>
  );
}