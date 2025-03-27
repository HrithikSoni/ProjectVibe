import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialIcons,} from 'react-native-vector-icons'
import UTILS from "../";

const colors = UTILS.COLORS

const ICONS: any = {
  SearchIcon: () => (
    <Feather name="search" size={24} color={colors.themeColor} />
  ),
  
  LeftChevron:({ onPress, style = {} }) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <AntDesign name="left" size={20} color={colors.black} />
    </TouchableOpacity>
  ),
  HomeIcon:(props) => (
    <Foundation name="home" size={35} color={props?.color || colors.themeColor} />
  ),
  UserIcon:(props) => (
    <FontAwesome
      name="user"
      size={35}
      color={props?.color || colors.themeColor}
    />
  ),
  CrossIcon:(props) => (
    <TouchableOpacity onPress={props.onPress}>
      <Entypo name="cross" size={30} color={props?.color || colors.textColor} />
    </TouchableOpacity>
  ),
};

export default ICONS;

const styles = StyleSheet.create({
  statsContainer: {
    padding: 1,
    borderWidth: 1,
    // borderColor: colors.themeColor,
    borderRadius: 5,
  },
});
