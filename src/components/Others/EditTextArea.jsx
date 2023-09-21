export default function EdiTextArea({
  name,
  className,
  label,
  placeholder,
  inputValue,
  maxlength,
  isRequired,
  onChange
}) {
  const textResize = {
    resize: 'none',
  }
  return (
    <div className="flex flex-col w-full mb-2">
      <label htmlFor={`back-${className}`} className="font-medium">
        {label} {isRequired ? <span className="text-error">*</span> : ""}
      </label>
      <textarea
        name = {name}
        placeholder={placeholder}
        className="w-full rounded px-4 py-1 bg-white-80 border border-grullo-40  text-sm focus:border-2 focus:border-grullo-80"
        id={`back-${className}`}
        value={inputValue}
        maxLength={maxlength || "150"}
        style={textResize}
        required={isRequired}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
