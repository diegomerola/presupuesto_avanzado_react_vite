import React, { useEffect, useState } from "react";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  // State para disponible:
  const [disponible, setDisponible] = useState(0);

  // State para gastado:
  const [gastado, setGastado] = useState(0);

  // UseEffect atento a un cambio en gastos:
  useEffect(() => {
    // Calcular lo gastado:
    const totalGastado = gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );

    // Calcular lo disponible:
    const totalDisponible = presupuesto - totalGastado;

    // Actualizar gastado:
    setGastado(totalGastado);

    // Actualizar disponible:
    setDisponible(totalDisponible);
  }, [gastos]);

  // Formatear cantidad para mostrar en pantalla
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <p>Grafica aqui </p>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span>
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          <span>Gastado:</span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
