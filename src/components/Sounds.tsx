import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const soundInstances: { [key: string]: Sound } = {};

const PlaySound = (soundFile: any) => {
  try {
    if (!soundFile) {
      console.error('Sound file is required.');
      return;
    }

    const soundKey = soundFile.toString();

    if (!soundInstances[soundKey]) {
      console.log(`Loading sound: ${soundFile}`);

      soundInstances[soundKey] = new Sound(soundFile, (error) => {
        if (error) {
          console.error('Error loading sound:', error);
          delete soundInstances[soundKey];
          return;
        }

        soundInstances[soundKey].play((success) => {
          if (!success) {
            console.error(`Playback failed for sound: ${soundFile}`);
          }
        });
      });
    } else {
      soundInstances[soundKey].play((success) => {
        if (!success) {
          console.error(`Playback failed for sound: ${soundFile}`);
        }
      });
    }
  } catch (e) {
    console.error('Error playing sound:', e);
  }
};

const StopSound = (soundFile: any) => {
  const soundKey = soundFile.toString();
  if (soundInstances[soundKey]) {
    soundInstances[soundKey].stop(() => {
      console.log(`Stopped sound: ${soundFile}`);
    });
  }
};

export { PlaySound, StopSound };
