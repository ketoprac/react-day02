const Input = ({ type, onChange, defaultValue, name, disabled, label, value }) => {
  return (
    <>
    <label>{label}</label>
    <input
      className="shadow appearance-none border rounded w-15 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      onChange={onChange}
      name={name}
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
    />
      </>
  );
};

export default Input;
