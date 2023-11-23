import styles from "./drop-down.module.css";
import {useState} from "react";

const ReplyDropDown = ({handleDesc, handleAsc}) => {
    const [activeA, setActiveA] = useState(true);
    const [activeB, setActiveB] = useState(false);
    const handleActive = () => {
        setActiveA(!activeA);
        setActiveB(!activeB);
    };

    return (
        <div className={styles.boxDropDown}>
            <button className={activeA && !activeB ? styles.activeButton : styles.buttonDropDown} onClick={() => {handleActive(); handleDesc();}}>최신순</button>
            <button className={!activeA && activeB ? styles.activeButton : styles.buttonDropDown} onClick={() => {handleActive(); handleAsc();}}>오래된순</button>
        </div>
    );
};

export default ReplyDropDown;