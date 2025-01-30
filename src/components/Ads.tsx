import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Ads = () => {
    return (
        <View style={styles.ads}>
            <Text style={styles.adsText}>PLACEHOLDER</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    ads: {
        justifyContent: 'center',
        },
    adsText: {
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: 'blue',
        },
});

export default Ads;
