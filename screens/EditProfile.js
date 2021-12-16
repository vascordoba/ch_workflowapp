import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Text, TextInput, ScrollView, StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { saveProfile } from '../store/actions/profile-actions';
import PictureManager from '../components/device/PictureManager';

export default function EditProfile({ navigation, route }) {

  const profile = useSelector((state) => state.profile.profile);

  console.log("PROFILE LOADED", profile)

  const dispatch = useDispatch();
  const [name, setName] = useState(profile.name ? profile.name : '');
  const [alias, setAlias] = useState(profile.alias ? profile.alias : '');
  const [picture, setPicture] = useState(profile.picture ? profile.picture : '');

  const handleNameChange = (val) => setName(val);
  const handleAliasChange = (val) => setAlias(val);

  const handleTakePicture = (pic) => {
    setPicture(pic);
  }

  const handleSaveProfile = () => {
    dispatch(saveProfile(name, alias, picture));
    navigation.navigate('Profile');
  }

  return (
    <ScrollView>
      <View style={styles.mainView}>
        <Text style={styles.inputLabel}>Nombre</Text>
        <TextInput
          style={styles.inputText}
          value={name}
          onChangeText={handleNameChange}
        />
        <Text style={styles.inputLabel}>Alias</Text>
        <TextInput
          style={styles.inputText}
          value={alias}
          onChangeText={handleAliasChange}
        />
        <PictureManager onImage={handleTakePicture} profile={profile} />
        <Button
          title="Guardar"
          onPress={handleSaveProfile}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputLabel: {
    fontSize: 20
  },
  inputText: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});
