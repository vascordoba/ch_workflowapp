import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Examenes from "../screens/Examenes";

const Stack = createNativeStackNavigator();

export default function ExamenesNavigation() {
  return (
    <Stack.Navigator initialRouteName="Examenes">
      <Stack.Screen name="Examenes" component={Examenes} />
    </Stack.Navigator>
  );
}
