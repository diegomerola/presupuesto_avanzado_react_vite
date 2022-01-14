import React, { useState } from "react";
import Mensaje from "./Mensaje";
import BtnCerrarModal from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  // Funcion para ocultar modal
  const ocultarModal = () => {
    // Oculta la animacion del modal:
    setAnimarModal(false);

    // Dsp de 0,5 segundos desactiva el modal:
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  // State para campos
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");

  // State para msj
  const [msj, setMsj] = useState("");

  // Funcion para submit
  const handleSubmit = (e) => {
    // Detener submit
    e.preventDefault();

    // Validar
    if (nombre === "" || cantidad === "" || categoria === "") {
      // Si hay un error mostrar msj
      setMsj("Debe completar todos los campos...");

      // Eliminar msj dsp de 3 segundos
      setTimeout(() => {
        setMsj("");
      }, 2000);
      return;
    } else {
      // Sino hay errores:

      // Crear objeto y pasarlo al arreglo de gastos
      guardarGasto({ nombre, cantidad, categoria });

      // Oculta la animacion del modal:
      setAnimarModal(false);

      // Dsp de 0,5 segundos desactiva el modal:
      setTimeout(() => {
        setModal(false);
      }, 500);
    }
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={BtnCerrarModal}
          onClick={ocultarModal}
          alt="Cerrar Modal"
        ></img>
      </div>
      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>Nuevo gasto</legend>
        <div className="campo">
          {msj ? <Mensaje msj={msj} tipo="error" /> : null}
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade cantidad del gasto: ej.300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione categoria --</option>
            <option value="ahorro">Ahorro</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
          <input type="submit" value="Añadir gasto" />
        </div>
      </form>
    </div>
  );
};

export default Modal;
