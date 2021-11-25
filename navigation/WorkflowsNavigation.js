import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Workflows from "../screens/Workflows";

const Stack = createNativeStackNavigator();

export default function WorkflowNavigation() {
  return (
    <Stack.Navigator initialRouteName="Workflows">
      <Stack.Screen name="Workflows" component={Workflows} />
    </Stack.Navigator>
  );
}
