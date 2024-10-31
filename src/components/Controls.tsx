import { FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa";

const Controls = () => {
  return (
    <div>
      <div className="relativce h-1 bg-gray-700 rounded mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-green-500 shadow-sm shadow-green-500 rounded"
          style={{ width: "30%" }} //update with base on current time
        >
          <span className="absolute right-0 top-[100%] w-3 h-3 bg-green-300 rounded-full"></span>
        </div>
        <div className="flex items-center justify-between pt-2">
          {/* current time */}
          <span>1:25</span>
          {/* max duration */}
          <span>3:25</span>
        </div>
      </div>
      {/* Control button section */}
      <div className="flex justify-around items-center mt-10">
        {/* prev button */}
        <button>
          <FaStepBackward className="hover:text-green-600 duration-300" />
        </button>
        {/* play , pause button */}
        <div className="flex items-center justify-center">
          <button className="relative p-4 bg-white rounded-full shadow-lg glow-button ">
            <FaPlay className="text-black" />
            <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-green-300 to-green-700 opacity-30 glow-ring"></div>
          </button>
        </div>

        {/* next button */}
        <button>
          <FaStepForward className="hover:text-green-600 duration-300" />
        </button>
      </div>
    </div>
  );
};
export default Controls;
