import {StyleSheet} from 'react-native';
import {colors} from "../../colors";

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
  }
});
