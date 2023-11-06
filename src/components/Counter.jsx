const Counter = () => {
  return <div>
    <div className="flex ">
        <button className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md">Decrement</button>
        <button className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md">Increment</button>
    </div>
    <button className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md">Reset</button>
  </div>;
};

export default Counter;
