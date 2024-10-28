import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SongDetails from "./SongDetails";
import Controls from "./Controls";

const MusicPlayer = () => {
  return (
    <div className="p-10 bg-gray-800 rounded-xl shadow-xl w-80">
      {/* Top Header Section */}
      <div className="w-full flex items-center justify-between mb-10">
        <div className="">-</div>
        <p>Playing Now</p>
        <button>
          <HiOutlineMenuAlt3 className="text-2xl" />
        </button>
      </div>
      <SongDetails />
      <Controls />
    </div>
  );
};

export default MusicPlayer;
