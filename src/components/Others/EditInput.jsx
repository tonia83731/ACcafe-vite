export default function EditInput({
  name,
  className,
  label,
  type,
  placeholder,
  inputValue,
  isRequired,
  onChange
}) {
  return (
    <div className="flex flex-col w-full mb-2">
      <label htmlFor={`back-${className}`} className="font-medium">
        {label} {isRequired ? (<span className="text-error">*</span>) : ""}
      </label>
      <input
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        className="w-full rounded px-4 py-1 bg-white-80 border border-grullo-40  text-sm focus:border-2 focus:border-grullo-80"
        id={`back-${className}`}
        value={inputValue}
        required={isRequired}
        onChange={onChange}
      />
    </div>
  );
}
