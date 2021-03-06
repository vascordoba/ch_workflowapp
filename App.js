import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigation from "./navigation/MainNavigation";
import store from "./store";

import { init } from './db/db';

init().then(() => console.log('Database init OK'))
  .catch(err => {
    console.log('Database init failed');
    console.log(err.message);
  })

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}
