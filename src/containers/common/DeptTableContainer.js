import DeptTable from "../../components/common/DeptTable";
import {changeNum, readInfoList} from "../../modules/healthInfo";
import {useDispatch} from "react-redux";
import {initialize, readReviewList} from "../../modules/reviews";

const DeptTableContainer = ({type}) => {
    const dispatch = useDispatch();

    const handleDeptNum = (id) => {
        const changedDeptNum = id;

        // 2. 초기화 후 특정 진료과의 리뷰 목록 조회
        if (type === 'review') {
            dispatch(initialize());
            dispatch(readReviewList({deptNum: changedDeptNum, pageNum: 0}));
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