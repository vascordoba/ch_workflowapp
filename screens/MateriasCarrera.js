import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector, useDispatch, connect } from "react-redux";

import { filterMateria, selectMateria } from "../store/actions/materias-actions";
import MateriasContainer from "../components/lists/materias/MateriasContainer";

const MateriasCarrera = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const materiasCarrera = useSelector((state) => state.materias.filteredMaterias);
  const carrera = useSelector((state) => state.carreras.selected);

  useEffect(() => {
    dispatch(filterMateria(carrera.id));
  }, []);

  const handleViewCursado = (rowMap, item) => {
    console.log("IR a cursado: materia plan id " + item.plan_id);
    dispatch(selectMateria(item.plan_id));
  };

  return (
    <View style={styles.mainView}>
      <Text>{route.params.name}</Text>
      <MateriasContainer items={materiasCarrera} onGoToCursado={handleViewCursado} />
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

export default connect()(MateriasCarrera);
