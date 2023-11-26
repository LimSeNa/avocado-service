import ReviewDetailContainer from "../../containers/review/ReviewDetailContainer";
import ReplyContainer from "../../containers/reply/ReplyContainer";
import ReplyViewContainer from "../../containers/reply/ReplyViewContainer";

const ReviewDetailPage = () => {
    return (
        <>
            <ReviewDetailContainer/>
            <ReplyContainer type={'review'}/>
            <ReplyViewContainer type={'review'}/>
        </>
    );
};

export default ReviewDetailPage;