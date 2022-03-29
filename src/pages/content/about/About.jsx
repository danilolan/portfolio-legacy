import React, {useState} from 'react';
import styles from './styles.module.scss'

import Modal from './modal/Modal';

import personalImage from '../../../assets/personal.jpg'

function About() {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <>
            <section className={styles.about_container}>
                <div className={styles.text_container}>
                    <h2> Quem sou eu? </h2>
                    <p> Desenvolvedor fullstack reactjs, nodejs, mysql e mongodb. </p>
                    <button onClick={ () => setIsOpen( !isOpen )}>
                        Veja completo 
                        <div className={styles.arrow_container}>
                            <div className={styles.arrow}>
                                <div className={styles.arrow_bar}/>
                                <div className={styles.arrow_bar}/>
                            </div>
                            <div className={styles.arrow}>
                                <div className={styles.arrow_bar}/>
                                <div className={styles.arrow_bar}/>
                            </div>
                        </div>
                    </button>
                </div>
                <img src={personalImage} alt="personal image..." />
            </section>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
     );
}

export default About;