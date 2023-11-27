import Paging from "../../components/common/Paging";
import {useDispatch, useSelector} from "react-redux";
import {readInfoList} from "../../modules/healthInfo";

const PagingContainer = () => {
    const dispatch = useDispatch();
    const {deptNum} = useSelector(({healthInfo, loading}) => ({
        deptNum: healthInfo.deptNum,
    }));

    const handlePageNum = e => {
        const pageNum = e.target.value;
        dispatch(readInfoList({deptNum, pageNum}));
    };

    return (
        <Paging handlePageNum={handlePageNum}/>
    );
};

export default PagingContainer;