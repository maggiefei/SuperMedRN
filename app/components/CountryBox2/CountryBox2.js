import React from 'react';
import { View, Text, TouchableHighlight, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import colors from '../../config/colors';

const CountryBox = ({ info, index, onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.box}>
        <Text style={styles.name}>{info.country}</Text>
        <Image
          source={{ uri: info.url }}
          style={styles.pic}
        />
      </View>
    </TouchableHighlight>
  )
};

export default CountryBox;
