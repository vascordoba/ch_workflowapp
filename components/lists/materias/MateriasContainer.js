import React from "react";
import { FlatList, View } from "react-native";
import { MateriaItem } from "./MateriaItem";

const MateriasContainer = (props) => {
  const { items, onGoToCursado } = props;
  const keyExtractor = (item) => item.plan_id;

  const renderItem = (data, rowMap) => <MateriaItem data={data} rowMap={rowMap} onGoToCursado={onGoToCursado} />;

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

export default MateriasContainer;
