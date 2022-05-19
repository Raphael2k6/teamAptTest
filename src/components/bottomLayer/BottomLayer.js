import React from 'react';
import styles from './BottomLayer.module.scss';
import rays from '../../assets/img/rays.png';
import Icon from '../../assets/icon';
import coins from '../../assets/img/coins.png'

const BottomLayer = () => {
  return (
    <div className={styles.container}>
        {/* <div> */}
            <div className={styles.rays}>
                <Icon name='rays' />
            </div>
            <div className={styles.coins}>
                <img src={coins} alt="Gold coins" />
            </div>
        {/* </div> */}
    </div>
  )
}

export default BottomLayer