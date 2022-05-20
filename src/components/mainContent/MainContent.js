import React from 'react';
import styles from './MainContent.module.scss';
import Icon from '../../assets/icon';
import { isMobile } from 'react-device-detect';

const MainContent = () => {
  return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div>
                        {
                            isMobile ? <h1>Unlock to <span className={styles.bold}>Power your dreams!</span></h1> : 
                            <h1>Unlock to <br /><span className={styles.bold}>Power your dreams!</span></h1>
                        }
                        {isMobile ? <p>Stand a chance to win <span>N3,000,000 </span> everyday for the next 5 days</p> :
                            <p>Stand a chance to win <br /><span>N3,000,000 </span> everyday for the next 5 days</p>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent;