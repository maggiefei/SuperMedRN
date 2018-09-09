import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  box: {
    backgroundColor: colors.accent,
    alignItems: 'center',
    height: 100,
    width: 100,
    marginHorizontal: 7,
    borderRadius: 10,
  },
  name: {
    //fontFamily: 'Futura',
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
