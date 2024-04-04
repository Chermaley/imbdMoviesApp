import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    gap: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 24,
    left: 16,
    right: 0,
    zIndex: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.white,
    position: 'absolute',
    bottom: 20,
    left: 16,
    zIndex: 3,
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
    zIndex: 2
  },
});
