import axios from "axios";
import { PEDIR_DATOS_EXITO, PEDIR_DATOS_ERROR } from "../types";

const pedirDatosExito = (respuesta) => {
  return {
    type: PEDIR_DATOS_EXITO,
    payload: respuesta,
  };
};
const pedirDatosError = (respuesta) => {
  return {
    type: PEDIR_DATOS_ERROR,
    payload: respuesta,
  };
};

// export function pedirDatos(){
//     return async (dispatch)=>{
//         try{
//             const res= await axios.get("http://back.trenditsmart.com/notebooks/?cantidad=10&paginacion=1")
//             dispatch(pedirDatosExito(res.data.notebooks.vec[0]))
//         }
//         catch(error){
//         dispatch(pedirDatosError(error))
//     }
//     }
// }

export const pedirDatos = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `ramsCompetencia/?cantidad=10&paginacion=1&tipoMoneda=ARS`
    );
    dispatch(pedirDatosExito(res.data.notebooks.vec[0]));
    console.log(res.data);
  } catch (error) {
    dispatch(pedirDatosError(error));
  }
};
