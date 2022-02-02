import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({ presupuesto, gastos }) => {
  // State para porcentaje gastado
  const [porcentaje, setPorcentaje] = useState(0);

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

    // Actualizar gastado:
    setGastado(totalGastado);

    // Calcular lo disponible:
    const totalDisponible = presupuesto - totalGastado;

    // Actualizar disponible:
    setDisponible(totalDisponible);

    // Calcular porcentaje gastado:
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    // Actualizar porcentaje gastado dsp de 0,5 segundos
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 500);
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
      <CircularProgressbar
        value={porcentaje}
        text={`${porcentaje} % Gastado`}
        styles={buildStyles({
          pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
          trailColor: "#F5F5F5",
          textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
        })}
      />
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
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
