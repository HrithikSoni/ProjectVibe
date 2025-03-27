import React, { useEffect, useState, useRef } from "react";
import { View, TextInput, StyleSheet, Text, Keyboard } from "react-native";
import sty from "../../utils/style/globalStyles";
import UTILS from "../../utils";

const VerificationInput = (props) => {
  const [otp, setOtp] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => setKeyboardStatus(true));
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => setKeyboardStatus(false));

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    if (props?.isVerify) {
      inputRef.current?.focus();
    }
  }, [props?.isVerify]);

  return (
    <View style={[styles.container, { justifyContent: props?.isVerify ? "space-between" : "flex-start" }]}> 
      <View style={styles.codeAndPhoneNoContainer}>
        <Text style={styles.verifyText}>{" +91 " + props?.phoneNumber}</Text>
      </View>
      {props?.isVerify && (
        <View style={styles.otpBox}>
          <TextInput
            ref={inputRef}
            placeholder="Enter OTP"
            placeholderTextColor={UTILS.COLORS.themeColor}
            style={styles.textInput}
            keyboardType="numeric"
            maxLength={6}
            onChangeText={setOtp}
            value={otp}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  codeAndPhoneNoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  verifyText: {
    fontSize: 17,
    fontWeight: "500",
    color: UTILS.COLORS.themeColor,
  },
  otpBox: {
    marginTop: 10,
    paddingHorizontal: 5,
  },
  textInput: {
    ...sty.commonTextStyleNormal,
    width: "70%",
  },
});

export default VerificationInput;
