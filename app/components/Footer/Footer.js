import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel safe, find medicine wherever you are</Text>
    </View>
  )
};

export default Footer;
