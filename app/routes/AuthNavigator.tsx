import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthScreens from "../screens/AuthScreens";

const Stack = createStackNavigator(); 

const AuthNavigator = () => {
  return (
    <Stack.Navigator id={undefined}>
      {AuthScreens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ headerShown: false }} 
        />
      ))}
    </Stack.Navigator>
  );
};

export default AuthNavigator;
