import DeptTable from "../../components/common/DeptTable";
import {changeNum, readInfoList} from "../../modules/healthInfo";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const DeptTableContainer = () => {
    const dispatch = useDispatch();

    const handleDeptNum = (e) => {
        const changedDeptNum = e.target.id;
        dispatch(readInfoList({deptNum: changedDeptNum, pageNum: 0}));
        dispatch(changeNum({
                name: 'deptNum',
                value: changedDeptNum
            }),
        );
    };

    return (
        <DeptTable handleDeptNum={handleDeptNum}/>
    );
};

export default DeptTableContainer;