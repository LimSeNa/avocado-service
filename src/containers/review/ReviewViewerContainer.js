import ReviewViewer from "../../components/review/ReviewViewer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {readReviewDetail} from "../../modules/review";
import {useParams} from "react-router-dom";

const ReviewViewerContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {review, reviewError, loading} = useSelector(({review, loading}) => ({
        review: review.review,
        reviewError: review.reviewError,
        loading: loading['review/READ_REVIEW_DETAIL'],
    }));

    useEffect(() => {
        dispatch(readReviewDetail(id));
    }, [dispatch, id]);

    return (
        <>
            {!loading && review && (
                <ReviewViewer review={review}
                              reviewError={reviewError}
                />
            )}
        </>
    );
};

export default ReviewViewerContainer;