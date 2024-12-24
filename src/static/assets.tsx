import { Image } from 'react-native';

import airplane from '../assets/images/menu/airplane.png';
import brownNoise from '../assets/images/menu/brown_noise.png';
import fireplace from '../assets/images/menu/fireplace.png';
import hairDryer from '../assets/images/menu/hair_dryer.png';
import handDryer from '../assets/images/menu/hand_dryer.png';
import heater from '../assets/images/menu/heater.png';
import rain from '../assets/images/menu/rain.png';
import riverFlow from '../assets/images/menu/river_flow.png';
import thunderstorm from '../assets/images/menu/thunderstorm.png';
import vacuumCleaner from '../assets/images/menu/vacuum_cleaner.png';
import washingMachine from '../assets/images/menu/washing_machine.png';
import waterfall from '../assets/images/menu/waterfall.png';
import waves from '../assets/images/menu/waves.png';
import wind from '../assets/images/menu/wind.png';
import winter from '../assets/images/menu/winter.png';

import hairDryerSound from '../assets/sounds/menu/hair_dryer.mp3';
import handDryerSound from '../assets/sounds/menu/hand_dryer.mp3';
import heaterSound from '../assets/sounds/menu/heater.mp3';
import riverFlowSound from '../assets/sounds/menu/river_flow.mp3';
import thunderstormSound from '../assets/sounds/menu/thunderstorm.mp3';
import vacuumCleanerSound from '../assets/sounds/menu/vacuum_cleaner.mp3';
import wavesSound from '../assets/sounds/menu/waves.mp3';
import airplaneSound from '../assets/sounds/menu/airplane.mp3';
import fireplaceSound from '../assets/sounds/menu/fireplace.mp3';
import winterSound from '../assets/sounds/menu/winter.mp3';
import waterfallSound from '../assets/sounds/menu/waterfall.mp3';
import windSound from '../assets/sounds/menu/wind.mp3';
import washingMachineSound from '../assets/sounds/menu/washing_machine.mp3';
import brownNoiseSound from '../assets/sounds/menu/brown_noise.mp3';
import rainSound from '../assets/sounds/menu/rain.mp3';


const img1 = Image.resolveAssetSource(hairDryer).uri;
const img2 = Image.resolveAssetSource(handDryer).uri;
const img3 = Image.resolveAssetSource(heater).uri;
const img4 = Image.resolveAssetSource(riverFlow).uri;
const img5 = Image.resolveAssetSource(thunderstorm).uri;
const img6 = Image.resolveAssetSource(vacuumCleaner).uri;
const img7 = Image.resolveAssetSource(waves).uri;
const img8 = Image.resolveAssetSource(airplane).uri;
const img9 = Image.resolveAssetSource(fireplace).uri;
const img10 = Image.resolveAssetSource(winter).uri;
const img11 = Image.resolveAssetSource(waterfall).uri;
const img12 = Image.resolveAssetSource(wind).uri;
const img13 = Image.resolveAssetSource(washingMachine).uri;
const img14 = Image.resolveAssetSource(brownNoise).uri;
const img15 = Image.resolveAssetSource(rain).uri;

const sound1 = Image.resolveAssetSource(hairDryerSound).uri;
const sound2 = Image.resolveAssetSource(handDryerSound).uri;
const sound3 = Image.resolveAssetSource(heaterSound).uri;
const sound4 = Image.resolveAssetSource(riverFlowSound).uri;
const sound5 = Image.resolveAssetSource(thunderstormSound).uri;
const sound6 = Image.resolveAssetSource(vacuumCleanerSound).uri;
const sound7 = Image.resolveAssetSource(wavesSound).uri;
const sound8 = Image.resolveAssetSource(airplaneSound).uri;
const sound9 = Image.resolveAssetSource(fireplaceSound).uri;
const sound10 = Image.resolveAssetSource(winterSound).uri;
const sound11 = Image.resolveAssetSource(waterfallSound).uri;
const sound12 = Image.resolveAssetSource(windSound).uri;
const sound13 = Image.resolveAssetSource(washingMachineSound).uri;
const sound14 = Image.resolveAssetSource(brownNoiseSound).uri;
const sound15 = Image.resolveAssetSource(rainSound).uri;

interface Noise {
    id: number;
    imgUri: string;
    sound: string;
}

export const NoiseObj: Noise[] = [
    { id: 0, imgUri: img1, sound: sound1 },
    { id: 1, imgUri: img2, sound: sound2 },
    { id: 2, imgUri: img3, sound: sound3 },
    { id: 3, imgUri: img4, sound: sound4 },
    { id: 4, imgUri: img5, sound: sound5 },
    { id: 5, imgUri: img6, sound: sound6 },
    { id: 6, imgUri: img7, sound: sound7 },
    { id: 7, imgUri: img8, sound: sound8 },
    { id: 8, imgUri: img9, sound: sound9 },
    { id: 9, imgUri: img10, sound: sound10},
    { id: 10, imgUri: img11, sound: sound11 },
    { id: 11, imgUri: img12, sound: sound12 },
    { id: 12, imgUri: img13, sound: sound13 },
    { id: 13, imgUri: img14, sound: sound14 },
    { id: 14, imgUri: img15, sound: sound15 },
];

export interface IconImageProps {
    noiseObj: Noise[];
}
