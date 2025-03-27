import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PhoneNoInputBox from "./PhoneNoInputBox";
import DropDownModal from "../modals/DropdownModal";
import UTILS from "../../utils";

const RegisterContactInput = (props) => {
  const [code, setCode] = useState("");

  function handleDropdownSelect(e) {
    setCode(e);
  }

  return (
    <View>
      <DropDownModal
        data={{name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" }}
        header={"Select Country Code"}
        searchBarLabel={"Find Country Code"}
        flag="🇮🇳"
        label="India"
        {...props}
        onDropdownSelect={(e) => handleDropdownSelect(e.rightText)}
      />
      <PhoneNoInputBox {...props} code={code} />
    </View>
  );
};

export default RegisterContactInput;

const styles = StyleSheet.create({});
