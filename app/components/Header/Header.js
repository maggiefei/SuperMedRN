import React, { Component } from 'react';
import { View, Text, Platform, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../config/colors';

class Header extends Component {
  render() {
    let row = this.props.rowFromParent;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.rowFromParent}</Text>
      </View>
    )
  }
}

Header.propTypes = {
  rowFromParent: PropTypes.string
};

export default Header;
