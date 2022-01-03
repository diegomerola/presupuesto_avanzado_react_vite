import React, { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValid }) => {
  // State para msj
  const [msj, setMsj] = useState("");

  // Funcion para submit
  const handleSubmit = (e) => {
    // Detener submit
    e.preventDefault();

    // Validar
    // Si existe un error:
    if (!presupuesto || presupuesto < 0) {
      setMsj("No es un presupuesto valido");
      return;
    }
    // Sino existe un error:
    setMsj("");
    setIsValid(true);
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label>Definir presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {<Mensaje msj={msj} tipo={msj ? "error" : ""} />}
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
