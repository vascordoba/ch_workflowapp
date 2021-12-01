import React from "react";
import { View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { CarreraItem, CarreraHiddenItem } from "./CarreraItem";

const CarrerasContainer = (props) => {
  const { items, goToMaterias } = props;

  const keyExtractor = (item) => item.id;

  const renderItem = (data) => <CarreraItem data={data} />;
  const renderHiddenItem = (data, rowMap) => (
    <CarreraHiddenItem data={data} rowMap={rowMap} goToMaterias={goToMaterias} />
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

export default CarrerasContainer;
