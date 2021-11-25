import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import WorkflowNavigation from "./WorkflowsNavigation";
import TasksNavigation from "./TasksNavigation";

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
      initialRouteName="Tasks"
    >
      <BottomTabs.Screen
        name="Tasks"
        component={TasksNavigation}
        options={{
          tabBarIcon: ({ tintColor, activeTintColor }) => <Icon type="font-awesome" name="tasks" />,
        }}
      />
      <BottomTabs.Screen
        name="Workflows"
        component={WorkflowNavigation}
        options={{
          tabBarIcon: ({ tintColor, activeTintColor }) => <Icon type="font-awesome" name="random" color={tintColor} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
