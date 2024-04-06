import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';

export default StyleSheet.create({
  headerWrapper: {
    flex: 1,
    height: 64,
  },
  backIcon: {
    position: 'absolute',
    top: 24,
    left: 14,
    right: 0,
    zIndex: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    position: 'absolute',
    bottom: 20,
    left: 16,
    zIndex: 3,
    maxWidth: '80%',
  },
  imageWrapper: {
    width: '100%',
    height: 400,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
});
