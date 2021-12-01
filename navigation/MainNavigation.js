import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import WorkflowNavigation from "./ExamenesNavigation";
import CarrerasNavigation from "./CarrerasNavigation";

const BottomTabs = createBottomTabNavigator();

export default function MainNavigation() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#dedede" },
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#bbb",
        tabBarInactiveTintColor: "#000",
      }}
      initialRouteName="Carreras"
    >
      <BottomTabs.Screen
        name="Carreras"
        component={CarrerasNavigation}
        options={{
          tabBarIcon: ({ tintColor, activeTintColor }) => <Icon type="font-awesome" name="tasks" />,
        }}
      />
      <BottomTabs.Screen
        name="Examenes"
        component={WorkflowNavigation}
        options={{
          tabBarIcon: ({ tintColor, activeTintColor }) => <Icon type="font-awesome" name="random" color={tintColor} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
