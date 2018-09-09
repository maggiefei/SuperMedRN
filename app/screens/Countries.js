import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';

import { countryList } from '../config/data';
import { countryList2 } from '../config/data2';
import colors from '../config/colors';
import { CountryBox } from '../components/CountryBox';
import { CountryBox2 } from '../components/CountryBox2';
import { TitleBar } from '../components/TitleBar';
import { Footer } from '../components/Footer';

class Countries extends Component {
  handleRowPress = (item, index) => {
    this.props.navigation.navigate('Search', item, index);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <TitleBar />
          <View style={{ flex: 2, flexDirection: 'column', marginBottom: 55, marginTop: 55, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, }}>
            <FlatList
              horizontal={true}
              data={countryList}
              keyExtractor={(item) => item.country}
              renderItem={({ item, index }) =>
                <CountryBox
                  info={item} index={index} onPress={() => this.handleRowPress(item, index)}
                />
              }
            />
            <FlatList
              horizontal={true}
              data={countryList2}
              keyExtractor={(item) => item.country}
              renderItem={({ item, index }) =>
                <CountryBox2
                  info={item} index={index} onPress={() => this.handleRowPress(item, index)}
                />
              }
            />
          </View>
        <Footer />
      </View>
    );
  }
}
export default Countries;
