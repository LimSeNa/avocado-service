import ReviewList from "../../components/reviews/ReviewList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {initialize, readReviewHospital, readReviewList} from "../../modules/reviews";
import {useNavigate} from "react-router-dom";
import {changeField} from "../../modules/reviews";

const ReviewListContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {targetHospital, reviews, reviewsError, loading} = useSelector(({reviews, loading}) => ({
        targetHospital: reviews.targetHospital,
        reviews: reviews.reviews,
        reviewsError: reviews.reviewsError,
        loading: loading['reviews/READ_REVIEW_LIST'],
    }));

    const handleChange = (e) => {
        dispatch(changeField({
                name: 'targetHospital',
                value: e.target.value,
            }),
        );
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            console.log(targetHospital);
            dispatch(readReviewHospital({targetHospital: targetHospital, pageNum: 0}));
        }
    };

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
                                                targetHospital={targetHospital}
                                                handleChange={handleChange}
                                                handleSearch={handleSearch}
                                                handleNavigate={handleNavigate}
            />}
            {!loading && reviewsError && <ReviewList reviewsError={reviewsError}/>}
        </>
    );
};

export default ReviewListContainer;