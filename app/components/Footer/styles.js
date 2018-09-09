import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  container: {
    //flex: 1,
    //flexDirection: 'column',
    width: 380,
    height: 160,
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontFamily: 'GillSans-SemiBold',
    fontSize: 18,
    fontWeight: '400',
    color: colors.accent,
    //lineHeight: 160,
    paddingTop: 100,
  },
});
