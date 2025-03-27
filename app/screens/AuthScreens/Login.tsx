import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../../components/button/Button";
import UTILS from "../../utils";
import ParentWrapper from "../../components/wrappers/ParentWrapper";
import RegisterContactInput from '../../components/inputs/RegisterContactInput'
import AppText from "../../components/texts/AppText";



const colors = UTILS.COLORS;
const { AUTH_SCREENS } = UTILS.SCREEN_NAMES;
const isLoading = true


export default function Login({ navigation }) {
  const loginData = useRef({ countryId: "", contact: "" });


  function handleLoginSuccess(e) {
    console.log(e);
    // navigation.navigate(
    //   UTILS.SCREEN_NAMES.AUTH_SCREENS.OTP,
    //   loginData.current.contact
    // );
  }

  return (
    <ParentWrapper screenTitle={"Login"}>
      <View style={styles.container}>
        <View style={styles.middleContainer}>
          <RegisterContactInput
            onChangeText={(e) => (loginData.current.contact = e)}
          />
          <View style={styles.btnContainer}>
            <Button
              label={isLoading ? "...Loading" : "Continue"}
              // onButtonPress={() =>
              //   navigation.navigate(AUTH_SCREENS.OTP, {
              //     phoneNo: loginData.current.phoneNo,
              //   })
              // }
              onButtonPress={(e) => console.log(e)
              }
            />
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <Button
            label={"Don't have an account"}
            bgColor={colors.gray3}
            textColor={colors.black}
            onButtonPress={() => navigation.navigate(AUTH_SCREENS.SIGNUP)}
          />
          <AppText style={styles.bottomText}>
            By creating passcode you agree with our{" "}
            <AppText style={{ color: colors.themeColor }}>
              Terms & Conditions and Privacy Policy
            </AppText>
          </AppText>
        </View>
      </View>
      </ParentWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  middleContainer: {
    paddingTop: 50,
    marginBottom: 30,
  },
  lowerContainer: {
    marginTop: 60,
    gap: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomText: { lineHeight: 25, textAlign: "center" },
  btnContainer: { marginTop: 50 },
});
