import {PEDIR_DATOS_EXITO} from "../types"

const inicialState= {
    array:[]
}

export const recibirDataReducer = (state= inicialState,action)=>{
    switch (action.type){
        case PEDIR_DATOS_EXITO:
            return {
                ...state,array:action.payload
            }
        default :
        return state
    }
}
