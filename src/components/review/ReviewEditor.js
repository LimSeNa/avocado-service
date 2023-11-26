import {useState} from "react";
import styles from "./review-editor.module.css";
import DeptDropDown from "../board/DeptDropDown";
import {useDeptContext} from "../../context/DeptContext";
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";

const ReviewEditor = ({title, body, starPoint, targetHospital, targetDept, handleChange}) => {
    const deptTextMap = useDeptContext();
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    // 영어로 표시된 진료과를 한글로 반환하는 함수
    const handleDeptName = targetDept => {
        const selectedDept = deptTextMap.find(deptItem => targetDept === deptItem.deptValue);
        return selectedDept.deptName;
    };

    const handleTitle = e => {
        handleChange({key: 'title', value: e.target.value});
    };

    const handleBody = e => {
        handleChange({key: 'body', value: e.target.value});
    };

    const handleStarPoint = e => {
        handleChange({key: 'starPoint', value: e.target.value});
    };

    const handleHospital = e => {
        handleChange({key: 'targetHospital', value: e.target.value});
    };

    return (
        <div className={styles.boxEditor}>
            <div className={styles.boxInfo}>
                <div className={styles.boxInfoItem}>
                    <div className={styles.divInfo}>제목</div>
                    <input className={styles.inputInfo}
                           name='title'
                           value={title}
                           onChange={handleTitle}
                    />
                </div>
                <div className={styles.boxInfoItem}>
                    <div className={styles.boxInfoItem}>
                        <div className={styles.divInfo}>병원</div>
                        <input className={styles.inputInfo}
                               name='targetHospital'
                               value={targetHospital}
                               onChange={handleHospital}
                        />
                    </div>
                    <div className={styles.boxInfoItem}>
                        <div className={styles.divInfo}>진료과</div>
                        <button className={styles.btnDropDown} onClick={handleOpen} onBlur={handleBlur}>
                            <span>
                                {targetDept ? handleDeptName(targetDept) : '진료과'}
                            </span>
                            <span className={styles.iconArrow}>
                                {isOpen ? <RiArrowUpSLine/> : <RiArrowDownSLine/>}
                            </span>
                        </button>
                        {isOpen && <DeptDropDown className={styles.boxDropDown} deptTextMap={deptTextMap}
                                                 handleChange={handleChange} type={'review'}/>}
                    </div>
                    <div className={styles.boxInfoItem}>
                        <div className={styles.divInfo}>별점</div>
                        <input className={styles.inputInfo}
                               name='starPoint'
                               value={starPoint}
                               type='number'
                               min='0'
                               max='5'
                               onChange={handleStarPoint}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.boxBody}>
                <input className={styles.inputBody}
                       placeholder='좋았던 점, 아쉬웠던 점 등 솔직한 리뷰를 작성해 주세요!'
                       name='body'
                       value={body}
                       onChange={handleBody}
                />
            </div>
        </div>
    );
};

export default ReviewEditor;