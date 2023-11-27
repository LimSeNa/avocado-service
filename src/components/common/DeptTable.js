import styles from "./tabel.module.css";
import {MdOutlineFaceRetouchingNatural, MdOutlineLocalHospital} from "react-icons/md";
import {TbBrain, TbDental} from "react-icons/tb";
import {FaRegEye} from "react-icons/fa";
import {LuBaby, LuBone, LuScanFace} from "react-icons/lu";
import {RiMentalHealthLine, RiMindMap} from "react-icons/ri";
import {GiInternalInjury, GiNoseFront} from "react-icons/gi";
import {FiActivity} from "react-icons/fi";
import {AiOutlineMedicineBox} from "react-icons/ai";
import {IoManOutline, IoWomanOutline} from "react-icons/io5";
import {useEffect, useState} from "react";
import {v4 as uuid4} from "uuid";

const deptMap = [
    {
        id: null,
        deptName: '전체',
        deptValue: 'All',
        deptIcon: <MdOutlineLocalHospital/>,
        isClick: false,
    },
    {
        id: 12,
        deptName: '내과',
        deptValue: 'INTERNAL_MEDICINE',
        deptIcon: <GiInternalInjury/>,
        isClick: false,
    },
    {
        id: 14,
        deptName: '비뇨기과',
        deptValue: 'UROLOGY',
        deptIcon: <IoManOutline/>,
        isClick: false,
    },
    {
        id: 5,
        deptName: '산부인과',
        deptValue: 'OBSTETRICS',
        deptIcon: <IoWomanOutline/>,
        isClick: false,
    },
    {
        id: 4,
        deptName: '성형외과',
        deptValue: 'PLASTIC_SURGERY',
        deptIcon: <MdOutlineFaceRetouchingNatural/>,
        isClick: false,
    },
    {
        id: 11,
        deptName: '소아과',
        deptValue: 'PEDIATRIC',
        deptIcon: <LuBaby/>,
        isClick: false,
    },
    {
        id: 10,
        deptName: '신경과',
        deptValue: 'NEUROLOGY',
        deptIcon: <RiMindMap/>,
        isClick: false,
    },
    {
        id: 8,
        deptName: '신경외과',
        deptValue: 'NEUROSURGERY',
        deptIcon: <TbBrain/>,
        isClick: false,
    },
    {
        id: 2,
        deptName: '안과',
        deptValue: 'OPHTHALMOLOGY',
        deptIcon: <FaRegEye/>,
        isClick: false,
    },
    {
        id: 9,
        deptName: '외과',
        deptValue: 'SURGICAL',
        deptIcon: <FiActivity/>,
        isClick: false,
    },
    {
        id: 13,
        deptName: '이비인후과',
        deptValue: '0TOLARYNGOLOGY',
        deptIcon: <GiNoseFront/>,
        isClick: false,
    },
    {
        id: 6,
        deptName: '정신건강의학과',
        deptValue: 'PSYCHIATRY',
        deptIcon: <RiMentalHealthLine/>,
        isClick: false,
    },
    {
        id: 7,
        deptName: '정형외과',
        deptValue: 'ORTHOPEDICS',
        deptIcon: <LuBone/>,
        isClick: false,
    },
    {
        id: 1,
        deptName: '치과',
        deptValue: 'DENTAL',
        deptIcon: <TbDental/>,
        isClick: false,
    },
    {
        id: 3,
        deptName: '피부과',
        deptValue: 'DERMATOLOGY',
        deptIcon: <LuScanFace/>,
        isClick: false,
    },
    {
        id: 15,
        deptName: '한의원',
        deptValue: 'ORIENTAL_MEDICAL',
        deptIcon: <AiOutlineMedicineBox/>,
        isClick: false,
    }
];

const DeptTable = ({handleDeptNum}) => {
    const [deptMapState, setDeptMapState] = useState(deptMap);

    // 1. deptMapState 상태 변화
    const handleClick = (id) => {
        const newDeptMap = deptMapState.map(deptItem => {
            if (deptItem.id === id) {
                return {
                    ...deptItem,
                    isClick: true
                };
            } else {
                return {
                    ...deptItem,
                };
            }
        });

        setDeptMapState(newDeptMap);
    };

    // 3. handelClick, handleDept 함수 실행 후 deptMapState 상태 변경되었을 때 실행
    // 1에서 handleClick 함수에 의해 deptMapState는 상태 변경되었음
    useEffect(() => {
        deptMapState.forEach(deptItem => {
            if (deptItem.isClick) {
                deptItem.isClick = false;
            }
        });
    }, [deptMapState]);

    return (
        <div className={styles.boxTable}>
            {deptMapState.map(deptItem => (
                <div className={deptItem.isClick ? styles.boxClickedDept : styles.boxDept} key={uuid4()} onClick={() => {handleClick(deptItem.id); handleDeptNum(deptItem.id);}}>
                    <div className={styles.deptIcon}>{deptItem.deptIcon}</div>
                    <div>{deptItem.deptName}</div>
                </div>
            ))}
        </div>
    );
};

export default DeptTable;