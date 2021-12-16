import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const MateriaItem = (props) => {
  const { data, rowMap, onGoToCursado } = props;
  return (
    <TouchableHighlight onPress={() => console.log("You touched me")} style={styles.rowFront} underlayColor={"#AAA"}>
      <View>
        <Text>{data.item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: "center",
    backgroundColor: "#EEE",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 50,
  },

});

export { MateriaItem };
