import React, {useState} from 'react';
import styles from './styles.module.scss'
import './shaper.css'

import githubImg from '../../assets/github.png'
import linkedinImg from '../../assets/linkedin.png'
import instagramImg from '../../assets/instagram.png'
import emailImg from '../../assets/email.png'

function Header() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    
    return ( 
        <header>
            <div className={styles.header_container}>
                <div className={styles.social_container}>
                    <a href={process.env.REACT_APP_INSTAGRAM}>
                        <img src={instagramImg} alt="image instagram..." />
                        INSTAGRAM
                    </a>
                    <a href={process.env.REACT_APP_GITHUB}>
                        <img src={githubImg} alt="image github..." />
                        GITHUB
                    </a>
                    <a href={process.env.REACT_APP_LINKEDIN}>
                        <img src={linkedinImg} alt="image linkedin..." />
                        LINKEDIN
                    </a>  
                </div>

                <div className={styles.logo}>
                    DH
                </div>

                <button 
                    className={`${styles.menu_btn} ${ menuIsOpen ? styles.active : styles.desactive}`} 
                    onClick={() => setMenuIsOpen(!menuIsOpen)
                }>
                    <div className={styles.bar}/>
                    <div className={styles.bar}/>
                    <div className={styles.bar}/>
                </button>
            </div>

            <div className={`${styles.menu_container} ${ menuIsOpen ? styles.active : styles.desactive}`}>
                <div class="custom-shape-divider-top-1647646271">
                    <div className={styles.rec_top}/>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill f"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill s"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill t"></path>
                    </svg>
                </div>

                <div className={styles.option_container}>
                    <a href={process.env.REACT_APP_HOME}>
                        <span>
                            home    
                        </span>
                        <div className={styles.bar_top}/>
                        <div className={styles.bar_bot}/>
                    </a>
                    <a href={process.env.REACT_APP_SOBRE_MIM}>
                        <span>
                            sobre mim 
                        </span>
                        <div className={styles.bar_top}/>
                        <div className={styles.bar_bot}/>
                    </a>
                    <a href={process.env.REACT_APP_PROJETOS}>
                        <span>
                            projetos   
                        </span>
                        <div className={styles.bar_top}/>
                        <div className={styles.bar_bot}/>
                    </a>
                    <a href={process.env.REACT_APP_CONTATO}>
                        <span>
                            Contato  
                        </span>
                        <div className={styles.bar_top}/>
                        <div className={styles.bar_bot}/>
                    </a>
                </div>

                <div className={styles.star_container}>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                    <div className={styles.star}/>
                </div>
            </div>
        </header>
     );
}

export default Header;