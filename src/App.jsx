import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  // State para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  // State para modal
  const [modal, setModal] = useState(false);

  // State para animar modal
  const [animarModal, setAnimarModal] = useState(false);

  // Funcion para agregar un nuevo gasto y mostrar modal
  const handleNuevoGasto = () => {
    // Activa modal
    setModal(true);

    // Dsp de 5 segundos carga la animacion del modal
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValid={setIsValid}
        isValid={isValid}
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
      {modal ? (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      ) : null}
    </div>
  );
}

export default App;
