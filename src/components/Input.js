const Input = ({ type, onChange, defaultValue, name, disabled }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      onChange={onChange}
      defaultValue={defaultValue}
      name={name}
      disabled={disabled}
    />
  );
};

export default Input;
