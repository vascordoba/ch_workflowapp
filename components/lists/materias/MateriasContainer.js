import React from "react";
import { View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { MateriaItem, MateriaHiddenItem } from "./MateriaItem";

const MateriasContainer = (props) => {
  const { items, onGoToCursado } = props;
  const keyExtractor = (item) => item.plan_id;

  const renderItem = (data) => <MateriaItem data={data} />;
  const renderHiddenItem = (data, rowMap) => (
    <MateriaHiddenItem data={data} rowMap={rowMap} onGoToCursado={onGoToCursado} />
  );

  return (
    <View>
      <SwipeListView
        keyExtractor={keyExtractor}
        data={items}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-100}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />
    </View>
  );
};

export default MateriasContainer;
