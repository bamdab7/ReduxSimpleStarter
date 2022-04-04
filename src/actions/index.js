    export const add = () =>{
    //nos va a devolver un objeto con un tipo de incremento
        return{
            type: "ADD" //esto va a ir directamente a nuestro counter y va a chequear el tipo de accion que es
        }
    }
    export const increment=(nr)=>{ //multiplicaremos el añadido
        return{
            type:"INCREMENT",
            payload:nr
        }
    }

export const decrement=()=>{
    return{
        type:"DECREMENT"
    }
}