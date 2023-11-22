import Paging from "../../components/common/Paging";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {readInfoList} from "../../modules/healthInfo";

const PagingContainer = () => {
    const dispatch = useDispatch();
    const {deptNum} = useSelector(({healthInfo}) => ({
        healthInfo: healthInfo.healthInfo,
        deptNum: healthInfo.deptNum,
    }));
    const [pageNum, setPageNum] = useState(1);

    const handlePlus = () => {
        setPageNum(prev => prev + 1);
        dispatch(readInfoList({deptNum, pageNum}));
    };

    return (
        <Paging pageNum={pageNum}
                handlePlus={handlePlus}
        />
    );
};

export default PagingContainer;