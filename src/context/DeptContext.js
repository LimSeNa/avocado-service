import {createContext, useContext} from "react";

const DeptContext = createContext(null);

export function DeptContextProvider({children}) {
    const deptTextMap = [
        {
            id: 12,
            deptName: '내과',
            deptValue: 'INTERNAL_MEDICINE'
        },
        {
            id: 14,
            deptName: '비뇨기과',
            deptValue: 'UROLOGY'
        },
        {
            id: 5,
            deptName: '산부인과',
            deptValue: 'OBSTETRICS'
        },
        {
            id: 4,
            deptName: '성형외과',
            deptValue: 'PLASTIC_SURGERY'
        },
        {
            id: 11,
            deptName: '소아과',
            deptValue: 'PEDIATRIC'
        },
        {
            id: 10,
            deptName: '신경과',
            deptValue: 'NEUROLOGY'
        },
        {
            id: 8,
            deptName: '신경외과',
            deptValue: 'NEUROSURGERY'
        },
        {
            id: 2,
            deptName: '안과',
            deptValue: 'OPHTHALMOLOGY'
        },
        {
            id: 9,
            deptName: '외과',
            deptValue: 'SURGICAL'
        },
        {
            id: 13,
            deptName: '이비인후과',
            deptValue: '0TOLARYNGOLOGY'
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
            id: 1,
            deptName: '치과',
            deptValue: 'DENTAL'
        },
        {
            id: 3,
            deptName: '피부과',
            deptValue: 'DERMATOLOGY'
        },
        {
            id: 15,
            deptName: '한의원',
            deptValue: 'ORIENTAL_MEDICAL'
        }
    ];

    return (
        <DeptContext.Provider value={deptTextMap}>
            {children}
        </DeptContext.Provider>
    );
}

export function useDeptContext() {
    return useContext(DeptContext);
}