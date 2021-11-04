import React from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { Button } from "react-native-elements";

const DeleteModal = (props) => {
  const { visible, onDelete, item, onCancel } = props;

  if (!visible) return null;
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{item.value} to be deleted</Text>
          <Button title="Confirm?" onPress={onDelete} />
          <Button title="Cancel" type="outline" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default DeleteModal;
