import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import Root from "./app/index";

// import { AppProvider } from "./app/context/AppContext";

export default function App() {
  return (
    <>
      <NavigationContainer> 
            <Root />
      </NavigationContainer>
      
    </>
  );
}
