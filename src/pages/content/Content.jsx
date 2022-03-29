import React from 'react';
import styles from './content.module.scss'

import Begin from './begin/Begin';
import About from './about/About'

const loadGame = localStorage.getItem('loadGame') === 'true'

function Content() {
    return ( 
        <div className={styles.content} style={ loadGame ? {flexDirection: 'row', display: 'flex'} : {flexDirection: 'column', display: 'block'}}>
            <Begin/>
            <About/>
        </div>
     );
}

export default Content;