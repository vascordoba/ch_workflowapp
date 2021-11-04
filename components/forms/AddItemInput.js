import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import { Button } from "react-native-elements";

const AddItemInput = (props) => {
  const { item, onAdd, onItemChange } = props;

  return (
    <View style={styles.addItemView}>
      <TextInput style={styles.addItemText} placeholder="Add a new item" value={item} onChangeText={onItemChange} />
      <Button title="Add" type="outline" onPress={onAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  addItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addItemText: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 20,
  },
});

export default AddItemInput;
