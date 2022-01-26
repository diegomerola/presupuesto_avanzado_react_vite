import { useState, useEffect } from "react";
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

  // State para editar gasto
  const [gastoEditar, setGastoEditar] = useState({});

  // Funcion para agregar un nuevo gasto y mostrar modal
  const handleNuevoGasto = () => {
    // Limpiar gastoEditar
    if (Object.keys(gastoEditar.length > 0)) {
      setGastoEditar({});
    }
    // Activa modal
    setModal(true);

    // Dsp de 5 segundos carga la animacion del modal
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  // Funcion para guardar objeto de gasto
  const guardarGasto = (gasto) => {
    // Si gasto.id tiene un valor entonces es un gasto a Editar:
    if (gasto.id) {
      // Buscar gasto, si coincide el id reemplazar el gasto
      const gastosActualizados = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      // Actualizar el arreglo de gastos
      setGasto(gastosActualizados);
    } else {
      // Si gasto.id no tiene un valor entonces es un Nuevo Gasto:
      // Asignar un id
      gasto.id = uuidv4();

      // Asignar una fecha
      gasto.fecha = Date.now();

      // Agregar gasto al arreglo general de gastos
      setGasto([...gastos, gasto]);
    }
    // Desactivar modal:
    setAnimarModal(false);

    // Desactivar animacion:
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  // Funcion para eliminar un gasto
  const eliminarGasto = (id) => {
    const gastosActualizado = gastos.filter((elemento) => elemento.id != id);
    setGasto(gastosActualizado);
  };

  // UseEffect para detectar cambios en gastoEditar
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      // Activa modal
      setModal(true);

      // Dsp de 5 segundos carga la animacion del modal
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        setIsValid={setIsValid}
        isValid={isValid}
        gastos={gastos}
      />
      {isValid ? (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
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
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      ) : null}
    </div>
  );
}

export default App;
