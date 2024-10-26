import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./drawer/DrawerNavigator";
import StackNavigator from "./stack/StackNavigator";

const AppNavigator = () => {
  const isAuthenticated = true;

  return isAuthenticated ? <DrawerNavigator /> : <StackNavigator />;
};

export default AppNavigator;
