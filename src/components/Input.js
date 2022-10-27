const Input = ({ type, onChange, defaultValue, name, disabled, label, value, placeholder }) => {
  return (
    <>
    <label className="text-gray-700 font-semibold" htmlFor={name}>{label}</label>
    <input
      // className="shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      className="border py-2 px-3 block w-full flex-1 rounded border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      type={type}
      onChange={onChange}
      name={name}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
      </>
  );
};

export default Input;
