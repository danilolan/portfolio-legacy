import React from 'react';
import styles from './styles.module.scss'

function Begin() {
    return ( 
        <section className={styles.begin_container}>
            <div className={styles.name_container}>
                <div>DANILO</div>
                <div>HERC</div>
            </div>
            <div className={styles.subtitle}> {'< Desenvolvedor de software />'} </div>
        </section>
     );
}

export default Begin;