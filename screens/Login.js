import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export default function Login({ navigation, route }) {
  console.log("LOGIN NAV", navigation);
  console.log("LOGIN ROUTE", route);

  const handleLogin = () => {
    navigation.navigate("Tasks");
  };

  return (
    <View style={styles.mainView}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainView: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
