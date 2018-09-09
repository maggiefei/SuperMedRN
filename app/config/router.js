import { StackNavigator } from 'react-navigation';

import Countries from '../screens/Countries';
import Healthcare from '../screens/Healthcare';
import Search from '../screens/Search';

export const MedStack = StackNavigator({
  Countries: {
    screen: Countries,
    navigationOptions: {
      header: null,
    }
  },
  /*Healthcare: {
    screen: Healthcare,
    navigationOptions: ({ navigation }) => ({
      headerTransparent: true,
    }),
  },*/
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      headerTransparent: true,
    }),
  },
})
