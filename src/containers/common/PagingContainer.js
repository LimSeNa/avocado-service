import Paging from "../../components/common/Paging";
import {useDispatch, useSelector} from "react-redux";
import {readInfoList} from "../../modules/healthInfo";
import {readReviewList} from "../../modules/reviews";

const PagingContainer = ({type}) => {
    const dispatch = useDispatch();
    const {ReviewsDeptNum, InfoDeptNum} = useSelector(({reviews, healthInfo}) => ({
        ReviewsDeptNum: reviews.deptNum,
        InfoDeptNum: healthInfo.deptNum,
    }));

    const handleReviewsPage = e => {
        const pageNum = e.target.value;
        dispatch(readReviewList({deptNum: ReviewsDeptNum, pageNum}));
    };

    const handleInfoPage = e => {
        const pageNum = e.target.value;
        dispatch(readInfoList({deptNum: InfoDeptNum, pageNum}));
    };

    return (
        <Paging handleInfoPage={handleInfoPage}
                handleReviewsPage={handleReviewsPage}
                type={type}
        />
    );
};

export default PagingContainer;