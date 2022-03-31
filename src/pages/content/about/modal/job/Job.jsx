import React from 'react';
import styles from './styles.module.scss'

function Job({image, name, company, begin, end, showInterval, withoutPadding }) {
    let interval = 0
    begin = new Date(begin)

    if(end){
        end = new Date(end)
        interval = daysBetween(begin, end)
    }
    else{
        interval = daysBetween(begin, new Date(Date.now()))
    }

    if(interval > 11){
        const division = interval / 12
        const rest = interval % 12
        interval = `${division.toFixed()} ano e ${rest} meses ` 
    }
    else{
        interval = `${interval} meses `
    }

    return ( 
        <div className={styles.job} id='job'>
            <img src={image} alt={company} style={{padding: withoutPadding ? '0px' : '7px'}}/>
            <div className={styles.content}>
                <div className={styles.row}>
                    {name}
                </div>
                <div className={styles.row}>
                    {company}
                </div>
                <div className={styles.row}>
                    {begin.toLocaleDateString('pt-BR').slice(3)} - {end ? end.toLocaleDateString('pt-BR').slice(3) : 'o momento'} 
                    <div className={styles.dot} style={{display: showInterval ? 'block' : 'none'}}/>
                    {showInterval ? interval : ''}
                </div>
            </div>
        </div>
     );
}

const daysBetween = function( date1, date2 ) {
    //Get 1 day in milliseconds
    var one_month=1000*60*60*24*30;
  
    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
  
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1_ms;
      
    // Convert back to days and return
    return Math.round(difference_ms/one_month); 
  }

export default Job