import React from "react";
import { Button } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Tasks from "../screens/Tasks";
import TaskDetail from "../screens/TaskDetail";

const Stack = createNativeStackNavigator();

export default function TasksNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ animation: "flip", headerStyle: { backgroundColor: "#45ffff" } }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Tasks"
        component={Tasks}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <Button
              onPress={() => {
                alert("Goodbye!");
                navigation.goBack();
              }}
              title="< Logout"
              type="outline"
            />
          ),
        })}
      />
      <Stack.Screen name="TaskDetail" component={TaskDetail} />
    </Stack.Navigator>
  );
}
