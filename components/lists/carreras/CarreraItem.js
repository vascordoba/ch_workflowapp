import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

const CarreraItem = (props) => {
  const { data } = props;
  return (
    <TouchableHighlight onPress={() => console.log("You touched me")} style={styles.rowFront} underlayColor={"#AAA"}>
      <View>
        <Text>{data.item.shortName}</Text>
        <Text style={styles.subtitle}>{data.item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const CarreraHiddenItem = (props) => {
  const { data, rowMap, goToMaterias } = props;
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backLeftBtn]}
        onPress={() => goToMaterias(rowMap, data.item)}
      >
        <Text style={styles.backTextWhite}>Ver Materias</Text>
      </TouchableOpacity>
    </View>
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
  rowBack: {
    alignItems: "center",
    backgroundColor: "#DDD",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 100,
  },
  backLeftBtn: {
    backgroundColor: "green",
    right: 0,
  },
  backTextWhite: {
    color: "#FFF",
  },
  subtitle: {
    fontSize: 9,
  },
});

export { CarreraItem, CarreraHiddenItem };
