import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import PairBtn from "../../components/button/PairButton";
import UTILS from "../../utils";

const { AUTH_SCREENS } = UTILS.SCREEN_NAMES;

const OnBoarding = ({ navigation }) => {
  return (
      <View style={[styles.contentContainer]}>
        <View style={[styles.upperContainer]}>
          <Image
            source={require("../../../assets/images/logo-png.png")}
            style={[styles.image]}
          />
        </View>
        <View style={[styles.middleContainer]}>
          <Text style={[styles.text]}>
            Welcome to the most rewarding Dating app
          </Text>
        </View>
        <View style={[styles.lowerContainer]}>
          <PairBtn
            onPressLeft={() => navigation.navigate(AUTH_SCREENS.LOGIN)}
            leftBtnText={"Login"}
            onPressRight={() => navigation.navigate(AUTH_SCREENS.SIGNUP)}
            rightBtnText={"Create Account"}
          />
        </View>
      </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  upperContainer: {
    marginTop: 20,
  },
  middleContainer: {
    marginTop: 75,
  },
  lowerContainer: {
    marginTop: 50,
  },
  text: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "600",
    textAlign: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius:50
  },
});
