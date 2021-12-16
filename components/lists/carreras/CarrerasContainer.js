import React from "react";
import { FlatList, View } from "react-native";
import { CarreraItem } from "./CarreraItem";

const CarrerasContainer = (props) => {
  const { items, goToMaterias } = props;

  const keyExtractor = (item) => item.id;

  const renderItem = (data, rowMap) => <CarreraItem data={data} rowMap={rowMap} goToMaterias={goToMaterias} />;

  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={items}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CarrerasContainer;
