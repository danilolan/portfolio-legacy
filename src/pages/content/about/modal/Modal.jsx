import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss'

const portalRoot = document.getElementById('portal-root')

function Modal({ isOpen, setIsOpen }) {
    return ReactDOM.createPortal( 
        <div className={styles.modal_container} style={ isOpen ? {display: 'flex'} : {display: 'none'}}>
            <div className={styles.modal}>
                dsdsds

                dsdsds
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                
            </div>
        </div>,
        portalRoot
     );
}

export default Modal;