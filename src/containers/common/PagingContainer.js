import Paging from "../../components/common/Paging";
import {useDispatch, useSelector} from "react-redux";
import {readInfoList} from "../../modules/healthInfo";
import {readReviewList} from "../../modules/reviews";
import {readBoardList} from "../../modules/boards";

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

    const handleBoardsPage = e => {
        const pageNum = e.target.value;
        dispatch(readBoardList({pageNum}));
    };

    const handleInfoPage = e => {
        const pageNum = e.target.value;
        dispatch(readInfoList({deptNum: InfoDeptNum, pageNum}));
    };

    return (
        <Paging handleReviewsPage={handleReviewsPage}
                handleBoardsPage={handleBoardsPage}
                handleInfoPage={handleInfoPage}
                type={type}
        />
    );
};

export default PagingContainer;