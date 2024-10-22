import MusicPlayer from "@/components/MusicPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-400">
      <MusicPlayer />
    </div>
  );
}
