import React, { useState } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import Styles from '../styles/main_page';
import PlaySound from './Sounds';
import SoundPlayer from 'react-native-sound-player';
import {NoiseObj, IconImageProps} from '../static/assets';


const IconImage: React.FC<IconImageProps> = ({ noiseObj }) => {
  const [currentSound, setCurrentSound] = useState<string | null>(null);

  const handleSoundPlay = (sound: string) => {
    if (currentSound === sound) {
      try {
        SoundPlayer.stop();
      } catch (e) {
        console.log('Error stopping sound', e);
      }
      setCurrentSound(null);
    } else {
      PlaySound(sound);
      setCurrentSound(sound);
    }
  };

  return (
    <View style={Styles.iconsBox}>
      {noiseObj.map((noise) => (
        <TouchableOpacity
          onPress={() => handleSoundPlay(noise.sound)}
          key={noise.id}
          activeOpacity={0.7}>
          <Image
            style={Styles.imageIcons}
            source={{ uri: noise.imgUri }} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Menu = () => {
  return (
    <ScrollView>
      <IconImage noiseObj={NoiseObj} />
    </ScrollView>
  );
};

export default Menu;
