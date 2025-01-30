import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Menu from './components/Menu';
import Ads from './components/Ads';
import { SafeAreaView } from 'react-native';


function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
      source={require('./assets/images/main/dark_background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.app}>
          <Text style={styles.appText}>Riposteee</Text>
          <Menu />
          <Ads />
      </View>
      </ImageBackground>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  appText: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 80,
    backgroundColor: 'red',
  },
  app: {
      flex: 4,
      marginHorizontal: 'auto',
      width: 400,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
