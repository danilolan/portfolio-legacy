import React from 'react';
import styles from './content.module.scss'

import Begin from './begin/Begin';

function Content() {
    return ( 
        <div className={styles.content}>
            <Begin/>
        </div>
     );
}

export default Content;