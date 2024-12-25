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

interface Noise {
  id: number;
  imgUri: string;
  sound: string;
}

export const NoiseObj: Noise[] = [
  { id: 0, imgUri: Image.resolveAssetSource(hairDryer).uri, sound: hairDryerSound },
  { id: 1, imgUri: Image.resolveAssetSource(handDryer).uri, sound: handDryerSound },
  { id: 2, imgUri: Image.resolveAssetSource(heater).uri, sound: heaterSound },
  { id: 3, imgUri: Image.resolveAssetSource(riverFlow).uri, sound: riverFlowSound },
  { id: 4, imgUri: Image.resolveAssetSource(thunderstorm).uri, sound: thunderstormSound },
  { id: 5, imgUri: Image.resolveAssetSource(vacuumCleaner).uri, sound: vacuumCleanerSound },
  { id: 6, imgUri: Image.resolveAssetSource(waves).uri, sound: wavesSound },
  { id: 7, imgUri: Image.resolveAssetSource(airplane).uri, sound: airplaneSound },
  { id: 8, imgUri: Image.resolveAssetSource(fireplace).uri, sound: fireplaceSound },
  { id: 9, imgUri: Image.resolveAssetSource(winter).uri, sound: winterSound },
  { id: 10, imgUri: Image.resolveAssetSource(waterfall).uri, sound: waterfallSound },
  { id: 11, imgUri: Image.resolveAssetSource(wind).uri, sound: windSound },
  { id: 12, imgUri: Image.resolveAssetSource(washingMachine).uri, sound: washingMachineSound },
  { id: 13, imgUri: Image.resolveAssetSource(brownNoise).uri, sound: brownNoiseSound },
  { id: 14, imgUri: Image.resolveAssetSource(rain).uri, sound: rainSound },
];

export interface IconImageProps {
  noiseObj: Noise[];
}
