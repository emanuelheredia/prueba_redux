import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pedirDatos } from "./Redux/Accions/accions";

const Notebook = () => {
  const dispatch = useDispatch();
  const datos = useSelector((state) => state);
  console.log(datos);
  return (
    <>
      <button onClick={() => dispatch(pedirDatos())}>Notebook</button>
      <ul>
        {/* {(datos.notebooks.array).map((item,index)=>(
      <li key={index}>{item._source.titulo}</li>
    ))} */}
      </ul>
    </>
  );
};

export default Notebook;
