import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({ presupuesto, setPresupuesto, setIsValid, isValid }) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValid ? (
        <ControlPresupuesto presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValid={setIsValid}
        />
      )}
    </header>
  );
};

export default Header;
