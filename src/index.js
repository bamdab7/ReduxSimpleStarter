import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; //service Worker en el tutorial
import {createStore} from 'redux';


//Store => estado globalizado (State)

//Action => descripcion de lo que queremos que haga, no es lo mismo de lo que hará [contador, INCREMENTADOR]
const increment = ()=>{
  return{
      type: 'INCREMENT'
  }
}

const decrement=()=>{
  return{
    type: 'DECREMENT'
  }
}

//Reducer => nos describe como la accion se tranaforma en un estado u otro
const counter=(state=0, action )=>{
    switch(action.type) { //cambiar la accion dependiendo del nombre
      case "INCREMENT":
        return state + 1; //aumenta el estado
      case "DECREMENT":
        return state - 1; //reduce el estado

    }
};

let store= createStore(counter);

//display in the console

//Dispatch => manda la accion al reducer, el cual mira que hay que hacer

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
