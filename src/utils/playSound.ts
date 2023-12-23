export const playSound = (sound: string | undefined) => {
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }
};
