import {StyleSheet} from 'react-native';
import {colors} from '../../../colors';

export default StyleSheet.create({
  contentWrapper: {
    gap: 10,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  skeleton: {
    flexBasis: '48%',
    height: 200,
    backgroundColor: colors.bgColor,
    borderRadius: 10,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 64,
  },
  emptyText: {
    color: colors.white,
    fontSize: 16,
    textAlign: 'center',
  },
});
