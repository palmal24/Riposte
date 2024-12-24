import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    appText: {
      fontSize: 40,
      textAlign: 'center',
      marginTop: 80,
      backgroundColor: 'red',
    },
    app: {
        flex: 4,
        marginHorizontal: 'auto',
        width: 400,
        backgroundColor: 'purple',
    },
    imageIcons: {
        backgroundColor: 'yellow',
        width: 80,
        height: 80,
        margin: 15,
    },
    iconsBox: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    ads: {
      justifyContent: 'center',
    },
    adsText: {
      fontSize: 40,
      textAlign: 'center',
      backgroundColor: 'blue',
    },
    numbersText: {
      backgroundColor: 'yellow',
      textAlign: 'center',
    },
  });

export default Styles;
