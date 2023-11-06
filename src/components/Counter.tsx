import Header from "./Header";

const Counter = () => {
  return (
    <div className="flex mx-auto flex-col py-10 gap-6">
      <Header />
      <div className="flex mx-auto gap-8 items-center">
        <button className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md hover:bg-purple-300">
          Decrement
        </button>
        <div className="rounded-full px-10 py-7 bg-white ">
          <p className="font-bold">0</p>
        </div>
        <button className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md hover:bg-purple-300">
          Increment
        </button>
      </div>
      <button className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md w-fit mx-auto hover:bg-purple-300">
        Reset
      </button>
    </div>
  );
};

export default Counter;
