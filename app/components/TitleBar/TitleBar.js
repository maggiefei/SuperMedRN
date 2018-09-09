import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

const TitleBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SuperMed</Text>
    </View>
  )
};

export default TitleBar;
