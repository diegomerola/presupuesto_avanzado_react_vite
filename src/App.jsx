import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  // State para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValid={setIsValid}
        isValid={isValid}
        IconoNuevoGasto={IconoNuevoGasto}
      />
      {isValid ? (
        <div className="nuevo-gasto">
          <img src={IconoNuevoGasto} alt="Icono Nuevo Gasto"></img>
        </div>
      ) : null}
    </div>
  );
}

export default App;
