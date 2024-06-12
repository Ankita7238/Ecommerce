import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import CartContext from "../../store/cart-context";
import { useContext } from "react";


const ModalOverlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const cartCtx = useContext(CartContext);
  const portalElement = document.getElementById("overlays");
  
  return (
      
    cartCtx.isCartVisible &&
    <>
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        portalElement
      )}
    </>
  );
};

export default Modal;