import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch, connect } from "react-redux";

import CarrerasContainer from "../components/lists/carreras/CarrerasContainer";
import { selectCarrera } from "../store/actions/carreras-actions";

const Carreras = ({ navigation, route }) => {
  const carreras = useSelector((state) => state.carreras.carreras);
  const dispatch = useDispatch();

  const handleGoToMaterias = (rowMap, item) => {
    console.log("IR a materias: carrera id " + item.id);
    dispatch(selectCarrera(item.id));
    navigation.navigate("Materias", { name: item.name });
  };

  return (
    <View style={styles.mainView}>
      <CarrerasContainer items={carreras} goToMaterias={handleGoToMaterias} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default connect()(Carreras);
