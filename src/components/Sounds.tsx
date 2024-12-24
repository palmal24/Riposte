import SoundPlayer from 'react-native-sound-player';


const PlaySound = (sound: string) => {
    try {
        SoundPlayer.playUrl(sound);
    } catch (e) {
        console.log('Error playing sound', e);
    }
};

export default PlaySound;
