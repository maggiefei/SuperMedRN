import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  box: {
    backgroundColor: colors.accent,
    alignItems: 'center',
    //paddingVertical: 20,
    //paddingHorizontal: 20,
    height: 100,
    width: 100,
    marginHorizontal: 7,
    borderRadius: 10
    //marginLeft: 20,
    //marginRight: 20,
  },
  name: {
    fontFamily: 'GillSans-Light',
    fontSize: 21,
    fontWeight: "400",
    color: colors.primaryText,
    lineHeight: 42,
  },
  pic: {
    position: 'absolute',
    height: 60,
    width: 60,
    marginTop: 35,
  },
});
