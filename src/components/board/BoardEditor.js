import {useEffect, useRef, useState} from "react";
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import Quill from "quill";
import 'quill/dist/quill.bubble.css';
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

    const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
    const quillInstance = useRef(null); // Quill 인스턴스를 설정

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
                theme: 'bubble',
                placeholder: '궁금한 점을 작성해 보세요. 의료진에게 무료로 답변 받을 수 있어요!',
                modules: {
                    toolbar: [
                        [{header: '1'}, {header: '2'}],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{'align': []}],
                        [{'color': []}, {'size': ['small', false, 'large', 'huge']}],
                        [{list: 'ordered'}, {list: 'bullet'}],
                        ['blockquote', 'code-block', 'link', 'image'],
                    ],
                },
            }
        );

        const quill = quillInstance.current;
        quill.on('text-change', () => {
            handleChange({key: 'body', value: quill.root.innerHTML});
        });
    }, [handleChange]);

    const handleTitle = e => {
        handleChange({key: 'title', value: e.target.value});
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
            <div className={styles.quillWrapper}>
                <div className={styles.inputBoardBody} ref={quillElement}/>
            </div>
        </div>
    );
};

export default BoardEditor;