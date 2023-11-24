import DeptTable from "../../components/common/DeptTable";
import {changeNum, readInfoList} from "../../modules/healthInfo";
import {useDispatch} from "react-redux";
import {initialize, readReviewList} from "../../modules/reviews";

const DeptTableContainer = ({type}) => {
    const dispatch = useDispatch();

    const handleDeptNum = (e) => {
        const changedDeptNum = e.target.id;

        if (type === 'review') {
            dispatch(initialize());
            dispatch(readReviewList({deptNum: changedDeptNum, pageNum: 0}))
        }

        if (type === 'health-info') {
            dispatch(readInfoList({deptNum: changedDeptNum, pageNum: 0}));
            dispatch(changeNum({
                    name: 'deptNum',
                    value: changedDeptNum
                }),
            );
        }
    };

    return (
        <DeptTable handleDeptNum={handleDeptNum}/>
    );
};

export default DeptTableContainer;