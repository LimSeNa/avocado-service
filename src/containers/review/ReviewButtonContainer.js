import ReviewButton from "../../components/review/ReviewButton";
import {useDispatch, useSelector} from "react-redux";
import {postReview, writeReview} from "../../modules/review";
import {useEffect} from "react";

const ReviewButtonContainer = () => {
    const dispatch = useDispatch();
    const {memberId, title, body, starPoint, targetHospital, targetDept, photoPath, review, reviewError} = useSelector(({review}) => ({
        memberId: review.memberId,
        title: review.title,
        body: review.body,
        starPoint: review.starPoint,
        targetHospital: review.targetHospital,
        targetDept: review.targetDept,
        photoPath: review.photoPath,
        review: review.review,
        reviewError: review.reviewError,
    }));

    const handleWrite = () => {
        dispatch(writeReview({
                memberId,
                title,
                body,
                starPoint,
                targetHospital,
                targetDept,
                photoPath,
            }),
        );
    };

    useEffect(() => {
        if (review) {
            console.log('리뷰 등록 성공!');
        }
        if (reviewError) {
            console.log(reviewError);
        }
    }, [review, reviewError]);

    return (
        <ReviewButton handleWrite={handleWrite}/>
    );
};

export default ReviewButtonContainer;