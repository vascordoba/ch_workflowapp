import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CarrerasReducer from "./reducers/carreras-reducer";
import MateriasReducer from "./reducers/materias-reducer";

const RootReducer = combineReducers({ carreras: CarrerasReducer, materias: MateriasReducer });

export default createStore(RootReducer, applyMiddleware(thunk));
