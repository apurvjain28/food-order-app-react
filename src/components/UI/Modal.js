import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = () => {
  const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
  };

  const ModalOverlay = () => {
    return <div className={classes.modal}></div>;
  };

  const isModalVisible = true;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
      {/* {isModalVisible && <Backdrop />}
      {isModalVisible && <ModalOverlay />} */}
    </React.Fragment>
  );
};

export default Modal;
