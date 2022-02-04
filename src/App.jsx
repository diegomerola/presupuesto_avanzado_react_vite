import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { v4 as uuidv4 } from "uuid";

function App() {
  // State para presupuesto
  const [presupuesto, setPresupuesto] = useState(
    // Obtener presupuesto del LS y parsear JSON. Sino existe asignarle = 0:
    JSON.parse(localStorage.getItem("presupuesto") ?? 0)
  );

  // State para gastos
  const [gastos, setGasto] = useState(
    // Obtener gastos del LS y parsear JSON. Sino existe asignarle = []
    JSON.parse(localStorage.getItem("gastos")) ?? []
  );

  // State para presupuesto valido
  const [isValid, setIsValid] = useState(false);

  // State para modal
  const [modal, setModal] = useState(false);

  // State para animar modal
  const [animarModal, setAnimarModal] = useState(false);

  // State para editar gasto
  const [gastoEditar, setGastoEditar] = useState({});

  // State para categoria de filtro
  const [filtro, setFiltro] = useState([]);

  // State para gastos filtrados
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

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

  // useEffect al iniciar presupuesto:
  useEffect(() => {
    // Si al iniciar la aplicacion (parsear JSON) el presupuesto del LS es mayor a 0:
    if (JSON.parse(localStorage.getItem("presupuesto")) > 0) {
      // Se activa ControlPresupuesto:
      setIsValid(true);
    }
  }, []);

  // useEffect para cambios en presupuesto:
  useEffect(() => {
    // Poner el presupuesto en LS:
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto)); //stringify JSON
  }, [presupuesto]);

  // useEffect para cambios en gastos:
  useEffect(() => {
    // Poner gastos en LS:
    localStorage.setItem("gastos", JSON.stringify(gastos)); //stringify JSON
  }, [gastos]);

  // useEffect para filtar gastos
  useEffect(() => {
    // Filtrar gastos que coincidan con categoria
    if (filtro) {
      const gastoFiltrado = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      // Agregar gasto filtrado al arreglo de gastos filtrados
      setGastosFiltrados(gastoFiltrado);
    }
  }, [filtro]);

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
        gastos={gastos}
        setGasto={setGasto}
        setFiltro={setFiltro}
      />
      {isValid ? (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
