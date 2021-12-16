import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Alert } from 'react-native';
import { Button } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker';

const PictureManager = (props) => {
  const [pictureUri, setPictureUri] = useState(props.profile.picture ? props.profile.picture : null);

  const handleTakePicture = async () => {
    const hasCameraAccess = await verifyPermissions();
    if (!hasCameraAccess) return;

    const picture = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });

    console.log("PIC MAN", picture)
    setPictureUri(picture.uri);
    props.onImage(picture.uri);
  }

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes para acceder a la cámara'
        [{ text: 'Ok' }],
      );
      return false;
    }
    return true;
  }

  return (
    <View style={styles.mainView}>
      <View>
        {pictureUri
          ? <Image source={{ uri: pictureUri }} style={styles.pictureDims} />
          : <Text>No hay imagen</Text>
        }
      </View>
      <Button
        title="Tomar Foto"
        type='outline'
        onPress={handleTakePicture}
        style={styles.takePictureBtn}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  pictureDims: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: "80%",
  },
  takePictureBtn: {
    marginBottom: 10
  }
});

export default PictureManager;