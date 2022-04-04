import counterReducer from "./counter";
import loggerReducer from "./itsLogged"; //llamado itsLogged
import { combineReducers } from "redux";

//lamamos en una sola funcion a todos nuestros reducers
const allReducers= combineReducers ( {
    counter: counterReducer, //le asignamos un nombre
    itsLogged: loggerReducer
})

export default allReducers;