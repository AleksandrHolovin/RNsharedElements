/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { setState } from 'react';
import { SafeAreaView } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
// import { RNPhotoScrollview } from "./src/RNPhotoScrollview/RNPhotoScrollview";
// import { RNFlatList } from "./src/RNFlatList/RNFlatList";
// import { SharedElementsIndex } from "./src/RNSharedElements/index";
import { RNSharedElementsStep3 } from "./src/RNSharedElementsStep3/Navigation";
import { WebView } from "react-native-webview"


const App: () => React$Node = () => {

  return (
    <RNSharedElementsStep3 />
  );
};


export default App;
