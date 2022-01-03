import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  // State para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  // State para modal
  const [modal, setModal] = useState(false);

  // Funcion para agregar un nuevo gasto
  const handleNuevoGasto = () => {
    console.log("Nuevo gasto...");
    setModal(true);
  };

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
          <img
            src={IconoNuevoGasto}
            alt="Icono Nuevo Gasto"
            onClick={handleNuevoGasto}
          ></img>
        </div>
      ) : null}
      {modal && <p>Mostrando modal</p>}
    </div>
  );
}

export default App;
