import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import DeleteModal from "./components/DeleteModal";
import AddItemInput from "./components/forms/AddItemInput";
import ListContainer from "./components/lists/ListContainer";

export default function App() {
  const [val, setVal] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVis, setModalVis] = useState(false);

  const handleChangeText = (value) => {
    setVal(value);
  };

  const handleAdd = () => {
    setVal("");
    const item = {
      value: val,
      id: parseInt(Math.random() * 10000).toString(),
      completed: false,
    };
    console.log("Adding item", item);
    setItemList([...itemList, item]);
  };

  const handleClose = (rowMap, id) => {
    if (rowMap[id]) {
      rowMap[id].closeRow();
    }
  };

  const handleRemove = (rowMap, id) => {
    handleClose(rowMap, id);
    setModalVis(true);
    setItemSelected(itemList.find((item) => item.id === id));
  };

  const handleComplete = (rowMap, id) => {
    handleClose(rowMap, id);
    const itemToComplete = itemList.find((item) => item.id === id);
    itemToComplete.completed = true;
    const filteredList = itemList.filter((item) => item.id !== id);
    setItemList(filteredList);
    setItemList([...filteredList, itemToComplete]);
  };

  const handleConfirmRemove = () => {
    setItemList((current) => current.filter((item) => item.id !== itemSelected.id));
    setModalVis(false);
    setItemSelected({});
  };

  const handleCancelRemove = () => {
    setModalVis(false);
    setItemSelected({});
  };

  return (
    <View style={styles.mainView}>
      <AddItemInput item={val} onAdd={handleAdd} onItemChange={handleChangeText} />
      <ListContainer itemsList={itemList} onDelete={handleRemove} onComplete={handleComplete} onClose={handleClose} />
      <DeleteModal
        visible={modalVis}
        onDelete={handleConfirmRemove}
        item={itemSelected}
        onCancel={handleCancelRemove}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mainView: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
