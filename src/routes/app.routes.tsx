import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from "../screens/Home";
import { Search } from "../screens/Search";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarActiveBackgroundColor: theme.colors.shape,
        tabBarInactiveBackgroundColor: theme.colors.shape,

        // indicatorStyle: {
        //   borderBottomColor: "red",
        // },
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          height: 50,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
