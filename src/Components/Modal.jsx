import React, { useContext } from "react";
import { Context } from "../Context/AppContext";
import { NavLink } from "react-router-dom";

const Modal = () => {
  const { modalData, setShowModal } = useContext(Context);
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            <p className="modal-title">{modalData.title}</p>
            {/* <span className="modal-cross">&times;</span> */}
          </div>
          <div className="modal-body">
            <img src={modalData.urlToImage} alt="" className="modal-img" />
            <p className="modal-desc">{modalData.description}</p>
          </div>
          <div className="modal-footer d-flex gap-3">
            <button
              className="btn btn-danger"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
            <NavLink to={modalData.url} target="_blank" className="btn btn-info">
              Go to Official Page
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
