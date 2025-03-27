import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import UTILS from "../../utils";

const Button = (props) => {
  const { disabled, onButtonPress, bgColor, textColor, label, style, bottom } = props;

  const buttonPress = () => {
    if (!disabled && onButtonPress) {
      onButtonPress();
    }
  };  

  return (
    <TouchableOpacity
      style={[
        styles.button,
        bottom ? styles.bottomButton : {},
        { 
          opacity: disabled ? 0.6 : 1,
          backgroundColor: bgColor || UTILS.COLORS?.themeColor, 
        },
        style,
      ]}
      onPress={buttonPress}
      disabled={disabled}
    >
      <Text style={[styles.btnText, { color: textColor || UTILS.COLORS?.gray3 }]}>
        {label || "Continue"}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    height: 57,
    marginTop: 5,
    width: "100%",
    position: "relative",
  },
  bottomButton: {
    position: "absolute",
    bottom: 20,
    left: (UTILS.DIMENSIONS.width - 360) / 2,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "700", 
  },
});
