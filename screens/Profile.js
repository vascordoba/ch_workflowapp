import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { useSelector, useDispatch } from 'react-redux';
import { loadProfile } from "../store/actions/profile-actions";

export default function Profile({ navigation, route }) {

  let profile = useSelector(state => {
    return state.profile.profile;
  })

  const handleEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <View style={styles.mainView}>
      {profile ? <Text>Perfil: {profile.alias}</Text> : ""}
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
