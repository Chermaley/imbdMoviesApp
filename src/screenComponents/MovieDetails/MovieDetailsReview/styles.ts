import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';

export default StyleSheet.create({
  wrapper: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: colors.bgColor,
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ratingValue: {
    fontSize: 16,
    color: colors.white,
  },
  ratingTotal: {
    fontSize: 15,
    color: colors.secondary,
  },
  body: {
    fontSize: 16,
    color: colors.white,
  },
  toggle: {
    fontSize: 16,
    color: colors.secondary,
    fontWeight: 'bold',
    marginTop: 8,
  },
  date: {
    fontSize: 15,
    color: colors.textSecondary,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 8,
  },
});
