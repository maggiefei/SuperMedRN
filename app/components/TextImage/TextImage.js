import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../config/colors';

class TextImage extends Component {
  render() {
    let passed = this.props.passIn;
    return (
    <View>
      <Text style={styles.bpm}>{this.props.passIn}</Text>
      <Image
        source={{ uri: picture.large }}
        style={styles.image}
      />
    </View>
    )
  }
}

TextImage.propTypes = {
  passIn: PropTypes.string
};

export default TextImage;
