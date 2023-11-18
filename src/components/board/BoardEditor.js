import {useEffect, useRef, useState} from "react";
import {RiArrowDownSLine, RiArrowUpSLine} from "react-icons/ri";
import Quill from "quill";
import 'quill/dist/quill.bubble.css';
import DeptDropDown from "./DeptDropDown";
import styles from "./board-editor.module.css";

const deptMap = [
    {
        id: 1,
        deptName: '치과',
        deptValue: 'DENTAL'
    },
    {
        id: 2,
        deptName: '안과',
        deptValue: 'OPHTHALMOLOGY'
    },
    {
        id: 3,
        deptName: '피부과',
        deptValue: 'DERMATOLOGY'
    },
    {
        id: 4,
        deptName: '성형외과',
        deptValue: 'PLASTIC_SURGERY'
    },
    {
        id: 5,
        deptName: '산부인과',
        deptValue: 'OBSTETRICS'
    },
    {
        id: 6,
        deptName: '정신건강의학과',
        deptValue: 'PSYCHIATRY'
    },
    {
        id: 7,
        deptName: '정형외과',
        deptValue: 'ORTHOPEDICS'
    },
    {
        id: 8,
        deptName: '신경외과',
        deptValue: 'NEUROSURGERY'
    },
    {
        id: 9,
        deptName: '외과',
        deptValue: 'SURGICAL'
    },
    {
        id: 10,
        deptName: '신경과',
        deptValue: 'NEUROLOGY'
    },
    {
        id: 11,
        deptName: '소아과',
        deptValue: 'PEDIATRIC'
    },
    {
        id: 12,
        deptName: '내과',
        deptValue: 'INTERNAL_MEDICINE'
    },
    {
        id: 13,
        deptName: '이비인후과',
        deptValue: '0TOLARYNGOLOGY'
    },
    {
        id: 14,
        deptName: '비뇨기과',
        deptValue: 'UROLOGY'
    },
    {
        id: 15,
        deptName: '한의원',
        deptValue: 'ORIENTAL MEDICAL'
    },
    {
        id: 16,
        deptName: '기타',
        deptValue: 'ETC'
    },
];

const BoardEditor = ({title, body, dept, handleChange}) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const handleDropDown = () => {
        setIsOpenDropDown(!isOpenDropDown);
    };
    const handleBlur = () => {
        setTimeout(() => {
            setIsOpenDropDown(false);
        }, 200);
    };

    const handleDropDownView = dept => {
        const selectedDept = deptMap.find(deptItem => dept === deptItem.deptValue);
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
                    {isOpenDropDown && <DeptDropDown deptMap={deptMap} handleChange={handleChange}/>}
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