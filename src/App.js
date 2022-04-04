import React, { useReducer } from "react";
import {useSelector, useDispatch} from "react-redux";
import {increment,decrement,add} from './actions';


//accedemos al counter 
function App() {

  const counter = useSelector(state => state.counter); //tendremos aceso a todos os estados
  const isLogged= useSelector(state => state.isLogged);
  const dispatch= useDispatch(); //importante poner esto, nos permitira comunicarnos con el action y luego esto va al counter (reducer)

  return (
    <div className="App">
      <h1>Contador {counter} </h1> 
      
      {/* estos botones tendran una accion cuando cliquemos */}
      <button onClick={()=> dispatch(increment(5))}> x </button>&nbsp;&nbsp;   
      <button onClick={()=> dispatch(add())}> +1 </button>&nbsp;&nbsp;  
      <button onClick={()=> dispatch(decrement())}> - </button>&nbsp;&nbsp;  

      {/* si esta logeado, runea cierta informacion o no, en este caso si es true runea el h3 */}
      {isLogged ? <h3>Valuable information i shouldnt see</h3> : "" }
    </div>
  );
}

export default App;
