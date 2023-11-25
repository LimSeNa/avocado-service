import {FaArrowAltCircleRight} from "react-icons/fa"
import {AiFillStar} from "react-icons/ai";
import {PiPencilSimpleLine, PiTargetBold} from "react-icons/pi";
import {TbBuildingHospital} from "react-icons/tb";
import styles from "./review-list.module.css";
import {FcSearch} from "react-icons/fc";

const ReviewItem = ({reviewItem, handleNavigate}) => {
    const {title, targetHospital, targetDept, writer, starPoint} = reviewItem;

    // 별점 그리는 함수
    const handleStar = (starPoint) => {
        const stars = [];

        for (let i = 1; i <= starPoint; i++) {
            stars.push(<AiFillStar style={{color: "#FFD745"}}/>);
        }

        return stars;
    };

    return (
        <div className={styles.boxReviewItem}>
            <div className={styles.boxInfo}>
                <div className={styles.boxReviewInfo}>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.boxSubInfo}>
                        <TbBuildingHospital className={styles.iconInfo}/>
                        <div>병원 : {targetHospital}</div>
                    </div>
                    <div className={styles.boxSubInfo}>
                        <PiTargetBold className={styles.iconInfo}/>
                        <div>진료과 : {targetDept}</div>
                    </div>
                    <div className={styles.boxSubInfo}>
                        <PiPencilSimpleLine className={styles.iconInfo}/>
                        <div>작성자 : {writer}</div>
                    </div>
                </div>
                <div className={styles.boxStarInfo}>
                    <div className={styles.iconStar}>{handleStar(starPoint)}</div>
                    <div>{starPoint}/5</div>
                </div>
            </div>
            <button  className={styles.linkButton} onClick={handleNavigate}>
                <div>리뷰 보러 가기</div>
                <FaArrowAltCircleRight className={styles.iconArrow}/>
            </button>
        </div>
    );
};

const ReviewList = ({reviews, reviewsError, targetHospital, handleChange, handleSearch, handleNavigate}) => {
    if (reviewsError) return <div>리뷰 목록 조회 실패</div>

    return (
        <div className={styles.boxReviewList}>
            <div className={styles.boxInput}>
                <FcSearch className={styles.iconSearch}/>
                <input className={styles.input}
                       placeholder='병원을 검색해 보세요.'
                       value={targetHospital}
                       onChange={handleChange}
                       onKeyUp={handleSearch}
                />
            </div>
            <div className={styles.boxReview}>
                {reviews && reviews.content.length !== 0 ?
                    <>
                        {reviews.content.map(reviewItem =>
                            <ReviewItem key={crypto.randomUUID()}
                                        reviewItem={reviewItem}
                                        handleNavigate={() => handleNavigate(reviewItem.id)}
                            />
                        )}
                    </>
                    : <div className={styles.boxNoReview}>
                        아직 등록된 리뷰가 없어요!
                    </div>
                }
            </div>
        </div>
    );
};

export default ReviewList;