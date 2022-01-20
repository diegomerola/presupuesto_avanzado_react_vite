import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
  return (
    <div className="listado-gastos contenedor">
      {gastos.length > 0 ? <h2>Gastos</h2> : <h2>No hay gastos</h2>}
      {gastos.map((gasto) => (
        <Gasto
          gasto={gasto}
          key={gasto.id}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  );
};

export default ListadoGastos;
