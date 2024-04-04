import {StyleSheet} from 'react-native';
import {colors} from "../../colors";

export default StyleSheet.create({
  infoItem: {
    backgroundColor: colors.bgColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 22,
    marginRight: 8,
  },
  infoItemText: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
  }
});
