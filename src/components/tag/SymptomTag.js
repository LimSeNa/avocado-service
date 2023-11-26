import {useEffect, useState} from "react";
import styles from "./tag.module.css";
import {AiOutlineClose} from "react-icons/ai";

const symptomMap = [
    {
        id: 'sym-1',
        text: '가슴통증',
        checked: false,
    },
    {
        id: 'sym-2',
        text: '골다공증',
        checked: false,
    },
    {
        id: 'sym-3',
        text: '관절통증',
        checked: false,
    },
    {
        id: 'sym-4',
        text: '기억장애・치매',
        checked: false,
    },
    {
        id: 'sym-5',
        text: '목・허리통증',
        checked: false,
    },
    {
        id: 'sym-6',
        text: '다리부종',
        checked: false,
    },
    {
        id: 'sym-7',
        text: '담석',
        checked: false,
    },
    {
        id: 'sym-8',
        text: '만성통증',
        checked: false,
    },
    {
        id: 'sym-9',
        text: '목 종괴',
        checked: false,
    },
    {
        id: 'sym-10',
        text: '목 이물감',
        checked: false,
    },
    {
        id: 'sym-11',
        text: '미숙아성장부진',
        checked: false,
    },
    {
        id: 'sym-12',
        text: '발목접질림',
        checked: false,
    },
    {
        id: 'sym-13',
        text: '복통・설사・혈변',
        checked: false,
    },
    {
        id: 'sym-14',
        text: '방사통',
        checked: false,
    },
    {
        id: 'sym-15',
        text: '배뇨장애・혈뇨',
        checked: false,
    },
    {
        id: 'sym-16',
        text: '복부통증',
        checked: false,
    },
    {
        id: 'sym-17',
        text: '불면증・기면증',
        checked: false,
    },
    {
        id: 'sym-18',
        text: '비만',
        checked: false,
    },
    {
        id: 'sym-19',
        text: '삼킴곤란・사래걸림',
        checked: false,
    },
];

const symptomPlusMap = [
    {
        id: 'sym-20',
        text: '소아천식・아토피',
        checked: false,
    },
    {
        id: 'sym-21',
        text: '손・발 저림',
        checked: false,
    },
    {
        id: 'sym-22',
        text: '손목통증',
        checked: false,
    },
    {
        id: 'sym-23',
        text: '시력저하',
        checked: false,
    },
    {
        id: 'sym-24',
        text: '손발톱변형',
        checked: false,
    },
    {
        id: 'sym-25',
        text: '안면통증・안면종괴',
        checked: false,
    },
    {
        id: 'sym-26',
        text: '안면홍조',
        checked: false,
    },
    {
        id: 'sym-27',
        text: '옆구리통증・혈뇨・거품뇨',
        checked: false,
    },
    {
        id: 'sym-28',
        text: '월경통・질출혈',
        checked: false,
    },
    {
        id: 'sym-29',
        text: '유방암・유방 종괴',
        checked: false,
    },
    {
        id: 'sym-30',
        text: '입냄새',
        checked: false,
    },
    {
        id: 'sym-31',
        text: '잦은 감염・발육부진',
        checked: false,
    },
    {
        id: 'sym-32',
        text: '급격한 체중변화',
        checked: false,
    },
    {
        id: 'sym-33',
        text: '코콜이',
        checked: false,
    },
    {
        id: 'sym-34',
        text: '코골이・무호흡',
        checked: false,
    },
    {
        id: 'sym-35',
        text: '학습장애・집중력저하',
        checked: false,
    },
];

const SymptomView = ({symptomItem, handleCheck, handlePick}) => {
    return (
        <span className={styles.tagSpan} key={symptomItem.id}>
                <input className={styles.tagInput}
                       name='symptom'
                       id={symptomItem.id}
                       value={symptomItem.text}
                       type='checkbox'
                       checked={symptomItem.checked}
                       onChange={e => {
                           handleCheck(symptomItem);
                           handlePick(e, symptomItem);
                       }}
                />
                <label className={symptomItem.checked ? styles.tagTrue : styles.tagLabel} htmlFor={symptomItem.id}>
                    {symptomItem.text}
                    {symptomItem.checked ? <AiOutlineClose className={styles.tagClose}/> : null}
                </label>
            </span>
    );
};

const SymptomTag = ({loading, handlePick, handleCheck}) => {
    const [isPlus, setIsPlus] = useState(false);
    const [isClose, setIsClose] = useState(true);
    const handleClick = () => {
        setIsPlus(!isPlus);
        setIsClose(!isClose);
    };

    // Modal 'X' 버튼 -> 증상 태그 초기화
    useEffect(() => {
        if (!loading) {
            symptomMap.forEach((symptomItem) => {
                if (symptomItem.checked) {
                    symptomItem.checked = false;
                }
            });

            symptomPlusMap.forEach((symptomItem) => {
                if (symptomItem.checked) {
                    symptomItem.checked = false;
                }
            });
        }
    }, [loading]);

    return (
        <div className={styles.tagBox}>
            {symptomMap.map(symptomItem => (
                <SymptomView key={symptomItem.id}
                             symptomItem={symptomItem}
                             handleCheck={handleCheck}
                             handlePick={handlePick}
                />
            ))}
            {!isPlus && isClose ?
                <span className={styles.tagSpan}>
                    <button className={styles.tagButton}
                            onClick={handleClick}>더보기</button>
                </span>
                : null
            }
            {isPlus && !isClose && (symptomPlusMap.map(symptomItem => (
                <SymptomView key={symptomItem.id}
                             symptomItem={symptomItem}
                             handleCheck={handleCheck}
                             handlePick={handlePick}
                />
            )))}
            {isPlus && !isClose ?
                <span className={styles.tagSpan}>
                    <button className={styles.tagButton}
                            onClick={handleClick}>접기</button>
                </span>
                : null
            }
        </div>
    );
};

export default SymptomTag;