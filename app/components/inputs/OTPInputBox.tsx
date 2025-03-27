import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OtpInput } from "react-native-otp-entry";

import UTILS from "../../utils";

const {COLORS} = UTILS;
const OTPInputBox = (props) => {

  function handleOtpInput(e){
    props?.onOtpInput(e)
  }

  return (
    <OtpInput
      // ref={(e) => (onOtpInput = e)}
      onTextChange={(e) => handleOtpInput(e)}
      theme={{
        pinCodeTextStyle: styles.textInputStyle
      }}
    />
  );
};
export default OTPInputBox;

const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor: COLORS.gray3,
    width: 75,
    height:65,
    borderRadius: 15
  }
});
