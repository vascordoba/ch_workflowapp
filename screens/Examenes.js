import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export default function Examenes({ navigation, route }) {
  const handleLogin = () => {
    navigation.navigate("Planes");
  };

  return (
    <View style={styles.mainView}>
      <Button title="Planes" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
