import React from 'react'
import modalStyles from './Modal.module.css'

const Modal = ({children}) => {



  return (
  <div className={modalStyles.background}>
    <div className={modalStyles.modal}>{children}</div>
  </div>
  )
}

export default Modal

//rafce react functional component engine