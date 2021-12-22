import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { loadProfile } from '../store/actions/profile-actions'

import ExamenesNavigation from "./ExamenesNavigation";
import CarrerasNavigation from "./CarrerasNavigation";
import ProfileNavigation from "./ProfileNavigation";

const BottomTabs = createBottomTabNavigator();

export default function MainNavigation() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProfile());
  }, [])

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#dedede" },
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#bbb",
        tabBarInactiveTintColor: "#000",
      }}
      initialRouteName="Planes"
    >
      <BottomTabs.Screen
        name="Planes"
        component={CarrerasNavigation}
        options={{
          tabBarIcon: ({ tintColor, activeTintColor }) => <Icon type="font-awesome" name="tasks" />,
        }}
      />
      <BottomTabs.Screen
        name="Mesas de Examen"
        component={ExamenesNavigation}
        options={{
          tabBarIcon: ({ tintColor, activeTintColor }) => <Icon type="font-awesome" name="random" color={tintColor} />,
        }}
      />
      <BottomTabs.Screen
        name="Mi perfil"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ tintColor, activeTintColor }) => <Icon type="font-awesome" name="user" color={tintColor} />,
        }}
      />
    </BottomTabs.Navigator>
  );
}
