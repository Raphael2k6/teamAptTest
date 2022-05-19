import React from 'react';
import Icon from '../../assets/icon';
import styles from './Nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.container}>
        <Icon name="logo" />
        <div className={styles.navDate}>
          <Icon name="calender" />
          <div className={styles.day}>
            <span>Day 1</span> <br/>
            <small>of 5</small>
          </div>
        </div>
    </div>
  )
}

export default Nav