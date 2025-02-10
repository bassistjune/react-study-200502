import styles from './CommonHeader.module.scss'

function CommonHeader() {
    return(
        <div className={styles.header}>
            <div className={styles.header__logoBox}>
                <img src="src/assets/images/image-logo.png" className={styles.header__logoBox__logo} alt="Logo IMage" />
                <span className={styles.header__logoBox__title}>
                    PhotoSplash
                </span>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진제출</button>
                <button className={styles.header__profileBox__button}>북마크</button>
                <span className={styles.header__profileBox__userName}>준쓰 | haners@nate.com</span>
            </div>
        </div>
    )
}

export default CommonHeader;