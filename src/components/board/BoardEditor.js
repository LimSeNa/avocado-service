import {useState} from "react";
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import DeptDropDown from "./DeptDropDown";
import styles from "./board-editor.module.css";
import {useDeptContext} from "../../context/DeptContext";

const BoardEditor = ({title, body, dept, handleChange}) => {
    const deptTextMap = useDeptContext();
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const handleDropDown = () => {
        setIsOpenDropDown(!isOpenDropDown);
    };
    const handleBlur = () => {
        setTimeout(() => {
            setIsOpenDropDown(false);
        }, 200);
    };

    // 영어로 표시된 진료과를 한글로 반환하는 함수
    const handleDropDownView = dept => {
        const selectedDept = deptTextMap.find(deptItem => dept === deptItem.deptValue);
        return selectedDept.deptName;
    };

    const handleTitle = e => {
        handleChange({key: 'title', value: e.target.value});
    };

    const handleBody = e => {
        handleChange({key: 'body', value: e.target.value});
    };

    return (
        <div className={styles.boxBoardEditor}>
            <div className={styles.boxSubInfo}>
                <div onBlur={handleBlur}>
                    <button className={styles.btnDropDown} onClick={handleDropDown}>
                        <span>
                            {dept ? handleDropDownView(dept) : '진료과'}
                        </span>
                        <span>
                            {isOpenDropDown ? <RiArrowUpSLine/> : <RiArrowDownSLine/>}
                        </span>
                    </button>
                    {isOpenDropDown && <DeptDropDown deptTextMap={deptTextMap} handleChange={handleChange}/>}
                </div>
                <input className={styles.inputBoardTitle}
                       name='title'
                       value={title}
                       placeholder='제목을 입력해 주세요.'
                       onChange={handleTitle}
                />
            </div>
            <div className={styles.boxBody}>
                <input className={styles.inputBody}
                       name='body'
                       value={body}
                       placeholder='궁금한 점을 작성해 보세요. 의료진에게 답변을 받을 수 있어요!'
                       onChange={handleBody}
                />
            </div>
        </div>
    );
};

export default BoardEditor;