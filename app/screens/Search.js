import React, { Component } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

import getDrugsCollection from "../config/mongo";
import { Header } from '../components/Header';

import colors from "../config/colors";

const styles = StyleSheet.create({
  pic: {
    position: 'absolute',
    height: 50,
    width: 50,
  }
})

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      brandData: false
    };
  }

  componentDidMount() {}

  searchForBrand(brand) {
    const whichCountry = this.props.navigation.state.params.country;
    const countryName = whichCountry + "-brands";

    getDrugsCollection().then(drugs => {
      return drugs.find(
        { "US-brands": brand },
        { countryName: 1 }
      ).asArray();
    }).then(results => {
      const data = results[0];
      this.setState({ brandData: data })
    })
  }

  renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            //width: "100%",
            backgroundColor: "#E6E6E6",
            //marginLeft: "5%",
            //marginRight: "5%"
          }}
        />
      );
    };

  render() {
    const countrySelect = this.props.navigation.state.params.country;
    const countryBrand = countrySelect + "-brands";
    const pictureName = countrySelect + "-picture";

    const { brandData } = this.state

    //const wtv = brandData[countryBrand];

    const rowStyle = [
      {
        //flexDirection: 'column',
        width: 160,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop:3,
      }
    ];

    const rowStyle2 = [
      {
        //flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 40,
      }
    ];

    return (
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: colors.background, }}>
        <Header rowFromParent={countrySelect}/>
        <SearchBar
          lightTheme
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={() => this.searchForBrand(this.state.text)}
          //onChange={this.setSearchText.bind(this)}
          placeholder="Search..."
        />

        <View style={{ flex: 2, flexDirection: "row", }}>
          <FlatList
            data={brandData[countryBrand]}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) =>
            <View style={rowStyle}>
              <Text>{item}</Text>
            </View>
            }
            ItemSeparatorComponent={this.renderSeparator}
          />

          <FlatList
            data={brandData[pictureName]}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) =>
            <View style={rowStyle2}>
              <Image
                source={{ uri: item }}
                style={styles.pic}
              />
            </View>
            }
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>


      </View>
    );
  }
}

export default Search;
