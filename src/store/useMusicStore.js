import { create } from "zustand";

const useMusicStore = create((set, get) => ({
  isPlaying: false,
  currentSongIndex: 0,
  audio: null,
  currentTime: 0,
  duration: 0,

  //   initialize the audio element
  initAudio: (audioElement) => {
    set({ audio: audioElement });

    // update duration
    audioElement.addEventListener("loadedmetadata", () => {
      set({ duration: audioElement.duration });
    });

    // update current time
    audioElement.addEventListener("timeupdate", () => {
      set({ currentTime: audioElement.currentTime });
    });
  },
  // play pause the current song
  toggleSong: () => {
    const { audio, isPlaying } = get();
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      set({ isPlaying: !isPlaying });
    }
  },
}));
