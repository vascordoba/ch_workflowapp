import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const CarreraItem = (props) => {
  const { data, rowMap, goToMaterias } = props;
  return (
    <TouchableHighlight onPress={() => goToMaterias(rowMap, data.item)} style={styles.rowFront} underlayColor={"#AAA"}>
      <View>
        <Text>{data.item.shortName}</Text>
        <Text style={styles.subtitle}>{data.item.name}</Text>
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
  subtitle: {
    fontSize: 9,
  },
});

export { CarreraItem };
