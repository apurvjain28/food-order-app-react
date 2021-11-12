import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
  };

  const ModalOverlay = () => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        props.isModalVisible && <Backdrop />,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        props.isModalVisible && <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
      {/* {isModalVisible && <Backdrop />}
      {isModalVisible && <ModalOverlay />} */}
    </React.Fragment>
  );
};

export default Modal;
