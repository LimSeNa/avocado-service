import {useDispatch, useSelector} from "react-redux";
import {initialize, writeReview} from "../../modules/review";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import EditorButton from "../../components/write/EditorButton";

const ReviewButtonContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {memberId, title, body, starPoint, targetHospital, targetDept, photoPath, review, reviewError, loading} = useSelector(({review, loading}) => ({
        memberId: review.memberId,
        title: review.title,
        body: review.body,
        starPoint: review.starPoint,
        targetHospital: review.targetHospital,
        targetDept: review.targetDept,
        photoPath: review.photoPath,
        review: review.review,
        reviewError: review.reviewError,
        loading: loading['review/WRITE_REVIEW'],
    }));

    const handleSubmit = () => {
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
        if (!loading && review) {
            navigate('/reviews');
            dispatch(initialize());
        }

        if (!loading && reviewError) {
            alert('리뷰 등록 실패!');
            console.log(reviewError);
        }
    }, [loading]);

    return (
        <EditorButton type={'review'}
                      handleSubmit={handleSubmit}/>
    );
};

export default ReviewButtonContainer;