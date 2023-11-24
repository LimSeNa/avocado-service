import {FaArrowAltCircleRight} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai";
import {IoIosSearch} from "react-icons/io";

const ReviewItem = ({reviewItem, handleNavigate}) => {
    const {starPoint, targetHospital, title} = reviewItem;

    // 별점 그리는 함수
    const onChangeStar = (starPoint) => {
        const stars = [];

        for (let i = 1; i <= starPoint; i++) {
            stars.push(<AiFillStar style={{color: "#FFD745"}}/>);
        }

        return stars;
    };

    return (
        <div>
            <div>
                <div>
                    <div><h3>{starPoint}</h3></div>
                    <div>{onChangeStar(starPoint)}</div>
                </div>
                <div>
                    <h3>{targetHospital}</h3>
                    {title}
                </div>
            </div>
            <button onClick={handleNavigate}>
                <div>리뷰 보러 가기</div>
                <FaArrowAltCircleRight/>
            </button>
        </div>
    );
};

const ReviewList = ({reviews, reviewsError, handleNavigate}) => {
    if (reviewsError) return <div>리뷰 목록 조회 실패</div>

    return (
        <div>
            <div>
                <IoIosSearch/>
                <input placeholder='병원을 검색해 보세요.'/>
            </div>
            <div>
                {reviews.content.map(reviewItem =>
                    <ReviewItem key={crypto.randomUUID()}
                                reviewItem={reviewItem}
                                handleNavigate={() => handleNavigate(reviewItem.id)}
                    />
                )}
            </div>
        </div>
    );
};

export default ReviewList;