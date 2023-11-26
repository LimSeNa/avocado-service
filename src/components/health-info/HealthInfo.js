import styles from "./health-info.module.css";
import {PiPencilSimpleLine} from "react-icons/pi";
import {v4 as uuid4} from "uuid";

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

    if (healthInfo && healthInfo.content.length === 0) return <div className={styles.boxNoItem}>아직 업로드된 건강 정보가 없어요!</div>

    return (
        <div className={styles.boxHealthInfo}>
            {healthInfo.content.map(infoItem =>
                <InfoItem key={uuid4()} infoItem={infoItem}/>
            )}
        </div>
    );
};

export default HealthInfo;