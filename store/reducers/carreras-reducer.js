import carreras from "../../assets/data/carreras.json";
import { SELECT_CARRERA } from "../actions/carreras-actions";

const initialState = {
  carreras,
  selected: null,
};

const CarrerasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CARRERA:
      const indexCarrera = state.carreras.findIndex((car) => car.id === action.carreraId);
      if (indexCarrera === -1) return state;
      return { ...state, selected: state.carreras[indexCarrera] };
    default:
      return state;
  }
};

export default CarrerasReducer;
