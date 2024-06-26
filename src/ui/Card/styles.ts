import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  card: {
    flexBasis: '48%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    borderRadius: 10,
  },
  cardImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 10,
    zIndex: 2,
    maxWidth: '80%',
  },
  noImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgColor,
  },
  noImageText: {
    color: 'white',
    fontSize: 24,
  },
  hidden: {
    opacity: 0,
  },
});
