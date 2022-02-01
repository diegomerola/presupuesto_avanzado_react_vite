import React from "react";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro.length > 0 ? (
        <>
          {gastosFiltrados.length > 0 ? (
            <h2>Gastos</h2>
          ) : (
            <h2>No hay gastos en esta categoria</h2>
          )}
          {gastosFiltrados.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          {gastos.length > 0 ? <h2>Gastos</h2> : <h2>No hay gastos</h2>}
          {gastos.map((gasto) => (
            <Gasto
              gasto={gasto}
              key={gasto.id}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
