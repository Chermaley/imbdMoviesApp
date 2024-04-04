import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flexBasis: '48%',
    height: 200,
    borderRadius: 10,
  },
  loader: {
    flex: 1,
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
  cardRating: {
    fontSize: 16,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 2,
  },
});
