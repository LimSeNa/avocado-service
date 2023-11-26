import ReviewDetail from "../../components/review/ReviewDetail";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initialize, readReviewDetail} from "../../modules/review";
import {useParams} from "react-router-dom";

const ReviewDetailContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {review, reviewError, loading} = useSelector(({review, loading}) => ({
        review: review.review,
        reviewError: review.reviewError,
        loading: loading['review/READ_REVIEW_DETAIL'],
    }));

    useEffect(() => {
        dispatch(initialize());
        dispatch(readReviewDetail(id));
    }, []);

    return (
        <>
            {!loading && review && <ReviewDetail review={review}/>}
            {!loading && reviewError && <ReviewDetail reviewError={reviewError}/>}
        </>
    );
};

export default ReviewDetailContainer;