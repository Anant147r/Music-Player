"use client";

import { useRef } from "react";
import useMusicStore from "../store/useMusicStore";

const SongDetails = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Spinning Disk */}
      <div className="relative w-36 h-36 rounded-full">
        {/* Disk Image with rotation style */}
        <img
          src="images/Austin-Mahone.jpg"
          alt=""
          className="absolute w-full h-full object-cover object-center z-20 rounded-full"
        />
        {/* Glowing ring around the disc */}

        <div className="absolute top-[-5%] left-[-5%] rounded-full glow-ring w-[110%] h-[110%] bg-gradient-to-r from-green-300 to-blue-400 opacity-30"></div>
      </div>

      {/* song title & artist */}
      <div className="text-center my-5">
        <h2 className="text-xl font-bold text-white">Dancing in the dark </h2>
        <p className="text-gray-400">Rihana</p>
      </div>
    </div>
  );
};

export default SongDetails;
