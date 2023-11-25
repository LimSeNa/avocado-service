import ReviewListContainer from "../../containers/reviews/ReviewListContainer";
import Banner from "../../components/common/Banner";
import ReviewIcon from "../../assets/review-icon.png";
import DeptTableContainer from "../../containers/common/DeptTableContainer";

const ReviewListPage = () => {
    return (
        <>
            <Banner type={'리뷰'}
                    title={'리뷰를 통해 만족스러운 병원을 미리 만나보세요!'}
                    icon={ReviewIcon}
            />
            <DeptTableContainer type={'review'}/>
            <ReviewListContainer/>
        </>
    );
};

export default ReviewListPage;