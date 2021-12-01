import materias from "../../assets/data/materias.json";
import { SELECT_MATERIA, FILTER_MATERIA } from "../actions/materias-actions";

const initialState = {
  materias,
  filteredMaterias: [],
  selected: null,
};

const MateriasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MATERIA:
      return { ...state, selected: state.materias.find((mat) => mat.plan_id === action.materiaId) };
    case FILTER_MATERIA:
      return {
        ...state,
        filteredMaterias: state.materias.filter((mat) => mat.carrera_id === action.carreraId),
      };

    default:
      return state;
  }
};

export default MateriasReducer;
