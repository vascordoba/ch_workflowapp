import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

export default function Profile({ navigation, route }) {

  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <View style={styles.mainView}>
      <Button title="Editar perfil" onPress={handleEditProfile} />
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
