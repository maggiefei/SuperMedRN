/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { MedStack } from './config/router.js';

import { YellowBox } from 'react-native';
console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings([
    "Warning: Failed child context type: Invalid child context",
  ]);
  YellowBox.ignoreWarnings([
      "(447) source.uri should not be an empty string",
    ]);

const App = () => {
  return (
    <MedStack />
  );
};

export default App;
