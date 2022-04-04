const loggerReducer = (state= false, action) =>{
    switch(action.type){
        case "SIGN_IN":
            return !state; //el contrario (opposite) lo cual= true
        default:
            return false;
    }
};

export default loggerReducer;