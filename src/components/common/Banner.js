import styles from "./banner.module.css";

const Banner = ({title, icon}) => {
    return (
        <div className={styles.boxBanner}>
            <div className={styles.boxTitle}>
                <h3 className={styles.subTitle}>Avocado의 주요 기능</h3>
                <h1>{title}</h1>
            </div>
            <div>
                <img src={icon} alt='Banner Icon'/>
            </div>
        </div>
    );
};

export default Banner;