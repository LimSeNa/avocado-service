import styles from "./health-info.module.css";
import {PiPencilSimpleLine} from "react-icons/pi";

const InfoItem = ({infoItem}) => {
    const {writer, title, dept, healthInfoPath} = infoItem;

    return (
        <div className={styles.boxInfoItem}>
            <h1 className={styles.boxInfoTitle}>
                <a className={styles.infoTitle} href={healthInfoPath}>
                    {title}
                </a>
            </h1>
            <div className={styles.boxSubInfo}>
                <div className={styles.boxWriter}>
                    <PiPencilSimpleLine className={styles.iconPencil}/>
                    <div>작성자 : {writer}</div>
                </div>
                <div className={styles.deptTag}>{dept}</div>
            </div>
        </div>
    );
};

const HealthInfo = ({healthInfo, healthInfoError}) => {
    if (healthInfoError) return <div>건강 정보 목록 조회 실패</div>

    return (
        <div className={styles.boxHealthInfo}>
            {healthInfo.content.map(infoItem =>
                <InfoItem key={crypto.randomUUID()} infoItem={infoItem}/>
            )}
        </div>
    );
};

export default HealthInfo;