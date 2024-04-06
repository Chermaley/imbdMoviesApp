import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';

export default StyleSheet.create({
  content: {
    gap: 10,
    paddingLeft: 16,
    paddingTop: 16,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  description: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    paddingRight: 16,
  },
  review: {
    paddingRight: 16,
  },
});
