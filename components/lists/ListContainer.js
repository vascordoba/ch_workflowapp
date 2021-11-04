import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { ListContainerItem, ListContainerHiddenItem } from "./ListContainerItem";

const ListContainer = (props) => {
  const { itemsList, onDelete, onComplete, onClose } = props;

  const keyExtractor = (item) => item.id;

  const renderItem = (data) => <ListContainerItem data={data} />;
  const renderHiddenItem = (data, rowMap) => (
    <ListContainerHiddenItem
      data={data}
      rowMap={rowMap}
      onDelete={onDelete}
      onComplete={onComplete}
      onClose={onClose}
    />
  );

  return (
    <View>
      <SwipeListView
        keyExtractor={keyExtractor}
        data={itemsList}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </View>
  );
};

export default ListContainer;
