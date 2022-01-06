import React from "react";
import BtnCerrarModal from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  // Funcion para ocultar modal
  const ocultarModal = () => {
    // Oculta la animacion del modal:
    setAnimarModal(false);

    // Dsp de 5 segundos desactiva el modal:
    setTimeout(() => {
      setModal(false);
    }, 500);
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
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo gasto</legend>
      </form>
    </div>
  );
};

export default Modal;
