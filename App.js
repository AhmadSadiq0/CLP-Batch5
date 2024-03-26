/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import { horizontalScale, moderateScale, verticleScale } from './src/helper/Metrics'
const { height } = Dimensions.get('window')
import Navigation from './src/navigation';
import 'react-native-gesture-handler';
import ListContextProvider from './src/context/ListContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={styles.container}>
      <ListContextProvider>
        <Navigation />
      </ListContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height
  },
  innerContainer: {
    height: height / 2
  }, text: {
    fontSize: moderateScale(40)
  },
  image: {
    height: '70%',
    width: '70%'
  }
});

export default App;
