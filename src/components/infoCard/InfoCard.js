import styles from './InfoCard.module.scss'
import Icon from '../../assets/icon';
import bulb from '../../assets/img/bulb.png'

const InfoCard = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.card}>
                    <div className={styles.card_content}>
                        <div className={styles.header}>
                            <Icon name='rocket' />
                        </div>

                        <ol>
                            <li>Guess the right combination of numbers</li>
                            <li>Win N3,000,000 instantly</li>
                        </ol>
                        <p>Sounds unbelievable? Well, guess right & see for yourself!</p>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <img src={bulb} alt="light bulb icon" />
                                <p>Think well before you guess. You have only 2 attempts per day and even after you wi, you can come back the next day to try for another jackpot!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                    <button>Play the Game</button>
                    <Icon name='arrowRight' />
                </div>
            </div>
        </div>
    )
}

export default InfoCard;