import { Fragment } from 'react';
import reactDom from 'react-dom';

import classes from './Modal.module.css'

const Backdrop = props => {
  return <div
    className={classes.backdrop}
    onClick={props.onClose}
  ></div>
}

const ModalOverlay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
  </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return <Fragment>
    {reactDom.createPortal(<Backdrop
      onClose = {props.onClose}
      className = {classes.backdrop}
    />, portalElement)}
    {reactDom.createPortal(<ModalOverlay
      className={classes.modal}
    >{props.children}</ModalOverlay>, portalElement)}
  </Fragment>
}
export default Modal;