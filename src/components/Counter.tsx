import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { decrement, increment, reset } from "../features/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state:{counter:{value:number}}) => state.counter.value);
  return (
    <div className="flex mx-auto flex-col py-10 gap-6">
      <Header />
      <div className="flex mx-auto gap-8 items-center">
        <button
          className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md hover:bg-purple-300"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="rounded-full px-10 py-7 bg-white ">
          <p className="font-bold">{value}</p>
        </div>
        <button
          className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md hover:bg-purple-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <button
        className="bg-gray-100 px-5 py-2 text-gray-900 rounded-md w-fit mx-auto hover:bg-purple-300"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
