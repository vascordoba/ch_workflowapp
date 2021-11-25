import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function TaskDetail() {
  return (
    <View style={styles.mainView}>
      <Text>This is a task detail</Text>
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
