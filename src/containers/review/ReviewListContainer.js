import ReviewList from "../../components/review/ReviewList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {readReviewList} from "../../modules/review";

const ReviewListContainer = () => {
    const dispatch = useDispatch();
    const {reviewList, reviewListError, loading} = useSelector(({review, loading}) => ({
        reviewList: review.review,
        reviewListError: review.reviewError,
        loading: loading['review/READ_REVIEW_LIST'],
    }));
    const [deptNum, setDeptNum] = useState(null);

    const onSelectDept = e => {
        const deptValue= e.target.value;
        console.log(deptValue)
        setDeptNum(deptValue);
    };

    useEffect(() => {
        if (deptNum == null) {
            dispatch(readReviewList());
        } else if (deptNum !== null) {
            dispatch(readReviewList(deptNum));
        }
    }, [dispatch, deptNum]);

    return (<>
            {!loading && reviewList && (
                <ReviewList onSelectDept={onSelectDept}
                            reviewList={reviewList}
                            reviewListError={reviewListError}
                            loading={loading}
                />
            )}
        </>
    );
};

export default ReviewListContainer;