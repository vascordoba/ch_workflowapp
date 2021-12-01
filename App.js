import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./navigation/MainNavigation";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
