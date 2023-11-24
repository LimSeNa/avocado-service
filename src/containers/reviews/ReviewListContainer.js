import ReviewList from "../../components/reviews/ReviewList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initialize, readReviewList} from "../../modules/reviews";
import {useNavigate} from "react-router-dom";

const ReviewListContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {reviews, reviewsError, loading} = useSelector(({reviews, loading}) => ({
        reviews: reviews.reviews,
        reviewsError: reviews.reviewsError,
        loading: loading['reviews/READ_REVIEW_LIST'],
    }));

    const handleNavigate = (id) => {
        navigate(`/reviews/${id}/details`);
    };

    // 처음 렌더링 때에만 실행 : deps에 빈 배열
    useEffect(() => {
        dispatch(initialize());
        dispatch(readReviewList({deptNum: null, pageNum: 0}));
    }, []);

    return (
        <>
            {!loading && reviews && <ReviewList reviews={reviews}
                                                handleNavigate={handleNavigate}
            />}
            {!loading && reviewsError && <ReviewList reviewsError={reviewsError}/>}
        </>
    );
};

export default ReviewListContainer;