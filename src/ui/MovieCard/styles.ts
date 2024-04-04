import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    borderRadius: 10,
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
