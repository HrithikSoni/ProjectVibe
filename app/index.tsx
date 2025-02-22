import React from "react";
import "react-native-gesture-handler";
import AuthNavigator from "./routes/AuthNavigator";
import UserNavigator from "./routes/UserNavigator";

export default function Root(): JSX.Element {
  const isLogin = false;

  return isLogin ? <UserNavigator /> : <AuthNavigator />;
}
