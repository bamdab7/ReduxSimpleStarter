const counterReducer =(state=0, action) =>{
    switch(action.type) { //cambiar la accion dependiendo del nombre
        case "INCREMENT":
            return state + action.payload; //aumenta el estado
        case "DECREMENT":
            return state - 1; //reduce el estado
        default:
            return state;
       }
}

export default counterReducer;