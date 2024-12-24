import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Styles from './styles/main_page';
import Menu from './components/Menu';
import Ads from './components/Ads';


function App() {
  return (
    <View style={Styles.app}>
        <Text style={Styles.appText}>Riposte</Text>
        <Menu />
        <Ads />
    </View>
  );
}

export default App;
