import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App() {
  return (
    <View>
      <View>
        <Text style={appStyles.appText}>Test app</Text>
      </View>
      <View>
        <Text style={appStyles.appText}>Whitenoise</Text>
      </View>
      <View>
        <Text style={appStyles.appText}>Riposte</Text>
      </View>
      <View>
        <Text style={appStyles.appText}>New test 12345</Text>
      </View>
    </View>
  );
}

const appStyles = StyleSheet.create({
  appText: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 40,
  },
});
export default App;
