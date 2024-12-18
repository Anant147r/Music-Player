"use client";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SongDetails from "./SongDetails";
import Controls from "./Controls";
import useMusicStore from "../store/useMusicStore";
import { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const { initAudio, musicLists, currentSongIndex } = useMusicStore();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      console.log(audio);
      initAudio(audio);
      audio.src = musicLists[currentSongIndex].src;
    }
  }, []);

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

      {/* hidden audio element */}
      <audio
        ref={audioRef}
        onEnded={() => useMusicStore.getState().nextSong()} // Auto play next song if ending
      ></audio>
    </div>
  );
};

export default MusicPlayer;
