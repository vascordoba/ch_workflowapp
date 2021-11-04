import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";

const ListContainerItem = (props) => {
  const { data } = props;
  return (
    <TouchableHighlight onPress={() => console.log("You touched me")} style={styles.rowFront} underlayColor={"#AAA"}>
      <View>
        <Text>{data.item.value}</Text>
        <Text style={styles.subtitle}>({!data.item.completed ? "Pending" : "Completed"})</Text>
      </View>
    </TouchableHighlight>
  );
};

const ListContainerHiddenItem = (props) => {
  const { data, rowMap, onClose, onDelete, onComplete } = props;
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backLeftBtn]}
        onPress={() => onComplete(rowMap, data.item.id)}
      >
        <Text style={styles.backTextWhite}>Complete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => onClose(rowMap, data.item.id)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => onDelete(rowMap, data.item.id)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemDeleteBtn: { minHeight: "100%", backgroundColor: "red" },
  listItemCompleteBtn: { minHeight: "100%", backgroundColor: "green" },
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
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
  },
  backLeftBtn: {
    backgroundColor: "green",
    left: 0,
  },
  backTextWhite: {
    color: "#FFF",
  },
  subtitle: {
    fontSize: 9,
  },
});

export { ListContainerHiddenItem, ListContainerItem };
