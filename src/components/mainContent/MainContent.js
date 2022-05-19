import React from 'react';
import styles from './MainContent.module.scss';
import Icon from '../../assets/icon';

const MainContent = () => {
  return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div>
                    {/* <div>
                        <h1>Unlock to <span className={styles.bold}>Power your dreams!</span></h1>
                    </div> */}
                        
                        {/* <div className={styles.center}>
                            <p>Stand a chance to win <span>N3,000,000 </span> everyday for the next 5 days</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent


// position: absolute;
//     top: 10.4rem;
//     left: 38%;
//     width: 24rem;
//     height: auto;
//     text-align: center;
// }

// position: absolute;
//     top: -39rem;
//     width: 100%;
//     text-align: center;