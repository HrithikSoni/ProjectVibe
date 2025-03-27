import { Platform } from "react-native";

function handlePlateform(iosConfig: number | undefined, androidConfig: number | undefined): number | undefined {
  return Platform.OS === "ios" ? iosConfig : androidConfig;
}

export default handlePlateform;
