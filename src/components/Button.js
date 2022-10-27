const Button = ({ onClick, children, type, color }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // className={`bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ${color} uppercase`}
      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
};

export default Button;
