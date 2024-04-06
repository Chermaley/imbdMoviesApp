import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.bgSecondary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  message: {
    color: colors.white,
    marginBottom: 20,
    fontSize: 17,
    textAlign: 'center',
  },
  retry: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 24,
  },
  back: {
    color: colors.white,
  },
});
