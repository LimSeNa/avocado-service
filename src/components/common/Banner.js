import styles from "./banner.module.css";
import {Link} from "react-router-dom";
import {IoArrowForwardSharp} from "react-icons/io5";

const Banner = ({type, title, icon}) => {
    return (
        <div className={styles.boxBanner}>
            <div className={styles.boxInfo}>
                <h3 className={styles.subInfo}>Avocado의 주요 기능</h3>
                <h1 className={styles.info}>{title}</h1>
                {type ?
                    <Link className={styles.boxLink} to={type === '리뷰' ?  '/reviews/write' : '/boards/write'}>
                        <div>{type} 작성하러 가기</div>
                        <IoArrowForwardSharp className={styles.iconArrow}/>
                    </Link>
                    : null
                }
            </div>
            <div className={styles.boxIcon}>
                <img src={icon} alt='Banner Icon'/>
            </div>
        </div>
    );
};

export default Banner;