import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.bgSecondary,
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
