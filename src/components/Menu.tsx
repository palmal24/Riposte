import React, { useState } from 'react';
import { Image, View, ScrollView, TouchableOpacity } from 'react-native';
import Styles from '../styles/main_page';
import { PlaySound, StopSound } from './Sounds';
import { NoiseObj, IconImageProps } from '../static/Assets';

const IconImage: React.FC<IconImageProps> = ({ noiseObj }) => {
  const [currentSounds, setCurrentSounds] = useState<string[]>([]);

  const handleSoundPlay = (sound: string) => {
    if (currentSounds.includes(sound)) {
      // Stop the sound if it's already playing
      StopSound(sound);
      setCurrentSounds((prev) => prev.filter((s) => s !== sound));
    } else if (currentSounds.length < 3) {
      // Play a new sound if less than 3 are playing
      PlaySound(sound);
      setCurrentSounds((prev) => [...prev, sound]);
    } else {
      console.log('Maximum of 3 sounds can be played at the same time.');
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
