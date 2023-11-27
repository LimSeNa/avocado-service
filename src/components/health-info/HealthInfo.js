import styles from "./health-info.module.css";
import {PiPencilSimpleLine} from "react-icons/pi";
import {v4 as uuid4} from "uuid";
import {useDeptContext} from "../../context/DeptContext";

const InfoItem = ({infoItem}) => {
    const deptTextMap = useDeptContext();

    const {writer, title, dept, healthInfoPath} = infoItem;
    
    // 영어로 표시된 진료과를 한글로 반환하는 함수
    const handleChangeLanguage = (dept) => {
        const selectedDept = deptTextMap.find(deptItem => dept === deptItem.deptValue);
        if (selectedDept === undefined) {
            return '기타';
        }
        return selectedDept.deptName;
    };

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
                <div className={styles.deptTag}>{handleChangeLanguage(dept)}</div>
            </div>
        </div>
    );
};

const HealthInfo = ({healthInfo, healthInfoError}) => {
    if (healthInfoError) return <div>건강 정보 목록 조회 실패</div>

    return (
        <div className={styles.boxHealthInfo}>
            {healthInfo && healthInfo.content.length !== 0 ?
                <>
                    {healthInfo.content.map(infoItem =>
                        <InfoItem key={uuid4()} infoItem={infoItem} healthInfo={healthInfo}/>
                    )}
                </>
                : <div className={styles.boxNoItem}>아직 업로드된 건강 정보가 없어요!</div>
            }
        </div>
    );
};

export default HealthInfo;