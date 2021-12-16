import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CarrerasReducer from "./reducers/carreras-reducer";
import MateriasReducer from "./reducers/materias-reducer";
import LoginReducer from "./reducers/login-reducer";
import ProfileReducer from "./reducers/profile-reducer";

const RootReducer = combineReducers({ carreras: CarrerasReducer, materias: MateriasReducer, auth: LoginReducer, profile: ProfileReducer });

export default createStore(RootReducer, applyMiddleware(thunk));
