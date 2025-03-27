import React from "react";
import { StyleSheet, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../texts/AppText";
import ICONS from "../../utils/style/Icons";

const {COLORS} = UTILS
 
const BottomSheetHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 20 }} />
      <AppText style={styles.header}>{props.header}</AppText>
      <ICONS.CrossIcon
        onPress={props.onRequestClose}
        color={COLORS.themeColor}
      />
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  header: { fontSize: 20, marginVertical: 10, fontWeight: "700" },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
