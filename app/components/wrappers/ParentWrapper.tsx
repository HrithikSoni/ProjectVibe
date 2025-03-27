import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UTILS from "../../utils";
import AppText from '../texts/AppText'
import ICONS from "../../utils/style/Icons";



const {COLORS} = UTILS

export default function ParentWrapper(props) {
  const navigation = useNavigation();

  const paddingHorizontal = props.paddingHorizontal ?? 20;

  return (
    <SafeAreaView style={styles.safeViewStyle}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ICONS.LeftChevron
            onPress={onBackBtnPress}
            style={{ position: "absolute", left: 10 }}
          />
          {props.screenTitle && (
            <AppText style={{ fontSize: 18 }}>{props.screenTitle}</AppText>
          )}
          {props.onStatsPress && (
            <ICONS.Stats
              onPress={props.onStatsPress}
              style={{ position: "absolute", right: 10 }}
            />
          )}
        </View>
        <View style={{ paddingHorizontal, flex: 1 }}>{props.children}</View>
      </View>
    </SafeAreaView>
  );

  function onBackBtnPress() {
    if (props.onBackBtnPress) {
      props.onBackBtnPress();
    } else {
      navigation.goBack();
    }
  }
}
const styles = StyleSheet.create({
  safeViewStyle: {
      flex: 1,
      backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: UTILS.HELPERS.handlePlateform(0, StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 20)
  },
  header: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  // upperContainer: {
  //   marginTop: 60,
  // },
  description: {
    width: UTILS.DIMENSIONS.width * 0.8,
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
    lineHeight: 38,
  },
});
