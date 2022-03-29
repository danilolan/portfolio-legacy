import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss'

const portalRoot = document.getElementById('portal-root')

function Modal({ isOpen, setIsOpen }) {
    return ReactDOM.createPortal( 
        <div className={styles.modal_container} style={ isOpen ? {display: 'flex'} : {display: 'none'}}>
            <div className={styles.modal}>
                <div className={styles.modal_box}>
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
            </div>
            <button onClick={ () => setIsOpen(false)}>
                <div className={styles.bar}/>
                <div className={styles.bar}/>
            </button>
        </div>,
        portalRoot
     );
}

export default Modal;