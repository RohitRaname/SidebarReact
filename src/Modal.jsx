import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context";

const  Modal= ()=> {
  const { isModalOpen, closeModal } = useAppContext();
  return (
    <>
      <div className="modal" data-active={isModalOpen}>
        <div className="overlay"></div>
        <div className="modal-center">
          <button className="close-btn" onClick={closeModal}>
            <FaTimes />
          </button>
          <h3>modal content</h3>
        </div>
      </div>
    </>
  );
}
export default Modal;