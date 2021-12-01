import React from "react";
import { Button } from "react-native-elements";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Carreras from "../screens/Carreras";
import MateriasCarrera from "../screens/MateriasCarrera";

const Stack = createNativeStackNavigator();

export default function CarrerasNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ animation: "flip", headerStyle: { backgroundColor: "#45ffff" } }}
    >
      <Stack.Screen name="CUP" component={Login} />
      <Stack.Screen
        name="Carreras"
        component={Carreras}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <Button
              onPress={() => {
                alert("Goodbye!");
                navigation.goBack();
              }}
              title="< Salir"
              type="outline"
            />
          ),
        })}
      />
      <Stack.Screen name="Materias" component={MateriasCarrera} />
    </Stack.Navigator>
  );
}
