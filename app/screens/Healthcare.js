import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import colors from '../config/colors';

class Healthcare extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 70, marginTop: 70, }}>
        <Text>Healthcare Screen</Text>
      </View>
    );
  }
}
export default Healthcare;
