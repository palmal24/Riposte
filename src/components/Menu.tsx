import React, { useState } from 'react';
import { Image, View, ScrollView, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { PlaySound, StopSound } from './Sounds';
import { NoiseObj, IconImageProps } from '../static/Assets';

const IconImage: React.FC<IconImageProps> = ({ noiseObj }) => {
  const [currentSounds, setCurrentSounds] = useState<string[]>([]);

  const handleSoundPlay = (sound: string) => {
    if (sound === 'stop') {
      PlaySound(sound);
      setCurrentSounds([]);
    } else if (currentSounds.includes(sound)) {
      StopSound(sound);
      setCurrentSounds((prev) => prev.filter((s) => s !== sound));
    } else if (currentSounds.length < 3) {
      PlaySound(sound);
      setCurrentSounds((prev) => [...prev, sound]);
    } else {
      Alert.alert('Maximum of 3 sounds can be played at the same time.');
    }
  };

  return (
    <View style={styles.iconsBox}>
      {noiseObj.map((noise) => (
        <TouchableOpacity
          onPress={() => handleSoundPlay(noise.sound)}
          key={noise.id}
          activeOpacity={0.7}>
          <Image
            style={styles.imageIcons}
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

const styles = StyleSheet.create({
  imageIcons: {
    width: 80,
    height: 80,
    margin: 15,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
  },
  iconsBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    },
});

export default Menu;
