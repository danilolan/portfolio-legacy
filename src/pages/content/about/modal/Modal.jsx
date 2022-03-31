import React from 'react';
import styles from './styles.module.scss'

import Job from './job/Job'

import rasImg from '../../../../assets/ras.jpeg'
import skillsImg from '../../../../assets/skills.png'
import tableImg from '../../../../assets/table.png'
import chronosImg from '../../../../assets/chronos.jfif'
import estacioImg from '../../../../assets/estacio.jfif'
import uauboxImg from '../../../../assets/uaubox.jfif'

function Modal() {
    return ( 
        <>
            <div className={styles.title}> 
                Sobre
            </div>

            <p style={{marginBottom: '50px'}}>
                &nbsp;&nbsp;&nbsp;&nbsp; Olá, meu nome é Danilo Herculano, sou um desenvolvedor <span>Full-stack</span> especializado em <span>React.js,
                Node.js, MySql, e MongoDB</span>. Para mim, resiliência e sede por conhecimento é o que me torna um profissional fora da curva, visto que
                trabalhar com tecnologia é aprender a lidar com problemas constantemente e se manter sempre atualizado.
            </p>

            <div className={styles.content}>     
                <div className={styles.timeline}>
                    <div className={styles.circle}/>
                    <div className={styles.line}/>
                    <div className={styles.year}>
                        <label>
                            2018
                        </label>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.year}>
                        <label>
                            2020
                        </label>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.year}>
                        <label>
                            2021
                        </label>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.year}>
                        <label>
                            2022
                        </label>
                    </div>
                    <div className={styles.line}/>
                    <div className={styles.line_final}/>
                
                </div>
                <div className={styles.text}>
                    <div className={styles.block}>
                        <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; Entrei no curso de Engenharia Elétrica me envolvendo com diversos projetos de robótica 
                            (RAS, IEEE) onde adquiri e aprimorei minhas <span>habilidades sociais e em programação</span>. 
                        </p>
                        <img src={rasImg} alt="ras..." />
                    </div>
                    <p style={{marginBottom: '20px'}}>
                            &nbsp;&nbsp;&nbsp;&nbsp; Decidi me dedicar ao que estava apaixonado, que era a <span>programação</span>. Passei a estudar em 
                            tempo integral para o ENEM com o objetivo de cursar Ciência da Computação. Nos meus horários vagos desenvolvia 
                            jogos, simulações e aplicações utilizando <span>Unity, Python, C++, C# e outras linguagens</span>. 
                    </p>
                    <br />
                    <p>
                            &nbsp;&nbsp;&nbsp;&nbsp; Após o ENEM iniciei meus estudos em <span>Desenvolvimento WEB</span>, fazendo diversos cursos sobre 
                            <span>HTML, CSS e Javascript, NodeJs</span> passando por Rocketseat, Cod3r e outros.       
                    </p>
                    <img src={skillsImg} alt="skills..." />
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp; Depois de apronfundar firmemente meus conhecimentos em <span>React, Express e MongoDB</span> comecei a por em prática 
                        tudo que havia aprendido desenvolvendo diversos projetos que podem ser vistos mais a frente neste site. Ao realizar um projeto novo 
                        eu sempre buscava <span>trazer conhecimentos que eu ainda não possuía</span> e ao mesmo tempo fixar os que já havia aprendido. 
                    </p>

                    <div className={styles.jobs_container}>
                        <Job
                            image={tableImg}
                            begin='04/01/2021'
                            end='06/01/2021'
                            name='Gerenciamento de clientes'
                            company='Freelancer'
                            showInterval={true}          
                        />
                        <Job
                            image={chronosImg}
                            begin='12/01/2021'
                            end='03/01/2022'
                            name='Desenvolvedor Web'
                            company='Chronos Tecnologia'
                            showInterval={true}          
                        />
                        <Job
                            image={estacioImg}
                            begin='01/01/2022'
                            name='Ciência da Computação'
                            company='Estácio'
                            showInterval={false} 
                            withoutPadding={true}         
                        />
                        <Job
                            image={uauboxImg}
                            begin='03/01/2022'
                            name='Desenvolvedor Web'
                            company='UAUbox Brasil'
                            showInterval={true} 
                            withoutPadding={true}          
                        />
                    </div>
                </div>
            </div>
        </>
     );
}

export default Modal;