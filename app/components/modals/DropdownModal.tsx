import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import UTILS from "../../utils";
import AppText from "../texts/AppText";
import BottomSheetModal from "./BottomSheetModal";
import ICONS from "../../utils/style/Icons";

// import AppText from "../wrappers/AppTextWrapper";

const {COLORS} = UTILS

const DropDownModal = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ name?: string; flag?: string; url?: string }>({});

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
    // handleModal();
    props?.onDropdownSelect(option);
  };

  const labelTextStyle = [
    styles.text,
    {
      color: selectedOption ? UTILS.COLORS.black : UTILS.COLORS.gray2,
    },
  ];

  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity style={styles.box} onPress={toggleModal}>
          <View style={styles.boxContent}>
            <View style={styles.boxText}>
              {selectedOption?.url ||
                (props?.flag && (
                  <AppText style={styles.flagStyle}>
                    {selectedOption?.flag || props?.flag}
                  </AppText>
                ))}
              <AppText style={labelTextStyle}>
                {selectedOption
                  ? selectedOption?.name
                  : props?.label || "Select Option"}
              </AppText>
            </View>
            <ICONS.CheveronIcon isListVisible={isModalVisible} />
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheetModal
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
        {...props}
        onBottomSheetSelect={(e) => handleOptionSelection(e)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    paddingVertical: 15,
    paddingLeft: 0.5,
    backgroundColor: UTILS.COLORS.gray1,
    paddingHorizontal: 20,
    fontSize: 17,
    borderRadius: 20,
    marginTop: 10,
    width: "100%",
  },
  boxContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxText: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 17,
    marginLeft: 15,
  },
  flagStyle: {
    marginLeft: 20,
  },
});

export default DropDownModal;
