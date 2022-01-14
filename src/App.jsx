import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { v4 as uuidv4 } from "uuid";

function App() {
  // State para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  // State para modal
  const [modal, setModal] = useState(false);

  // State para animar modal
  const [animarModal, setAnimarModal] = useState(false);

  // State para arreglo de gastos
  const [gastos, setGasto] = useState([]);

  // Funcion para crear objeto de gasto
  const guardarGasto = (gasto) => {
    // Crear id
    gasto.id = uuidv4();

    // Crear una fecha
    gasto.fecha = Date.now();

    // Agregar gasto al arreglo general de gastos
    setGasto([...gastos, gasto]);
  };

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
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValid={setIsValid}
        isValid={isValid}
      />
      {isValid ? (
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono Nuevo Gasto"
              onClick={handleNuevoGasto}
            ></img>
          </div>
        </>
      ) : null}
      {modal ? (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      ) : null}
    </div>
  );
}

export default App;
