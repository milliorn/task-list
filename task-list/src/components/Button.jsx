const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="inline-block px-5 py-3 m-1 text-sm no-underline border border-none rounded-md cursor-pointer sm:text-base btn bg-zinc-900 text-zinc-50 focus:text-zinc-50 focus:outline-none md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
    >
      {text}
    </button>
  );
};

export default Button;
