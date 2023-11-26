import {AiFillStar} from "react-icons/ai";
import styles from "../board/detail.module.css";
import {IoPersonCircleOutline} from "react-icons/io5";
import {FaRegComments} from "react-icons/fa";

const ReviewDetail = ({review, reviewError}) => {
    if (reviewError) return <div>리뷰 상세 조회 실패</div>

    const {writer, title, body, starPoint, targetHospital, targetDept, createAt, reviewReplyList} = review.data;

    // 별점 그리는 함수
    const handleStar = (starPoint) => {
        const stars = [];

        for (let i = 1; i <= starPoint; i++) {
            stars.push(<AiFillStar style={{color: "#FFD745"}}/>);
        }

        return stars;
    };

    return (
        <div className={styles.boxDetail}>
            <div className={styles.boxInfo}>
                <div className={styles.boxTarget}>
                    <div className={styles.tag}>{targetHospital}</div>
                    <div className={styles.tag}>{targetDept}</div>
                    <div className={styles.tag}>
                        {starPoint}&nbsp;
                        {handleStar(starPoint)}
                    </div>
                </div>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.boxSubInfo}>
                    <div className={styles.iconWriter}><IoPersonCircleOutline/></div>
                    <div className={styles.boxWriteInfo}>
                        <span className={styles.writer}>{writer}</span>
                        <span className={styles.writeTime}>
                            {new Date(createAt).toDateString().replace(/\s/g, '. ')}
                        </span>
                    </div>
                    <div className={styles.boxReplyInfo}>
                        <span className={styles.iconReply}><FaRegComments/></span>
                        <span>{reviewReplyList.length}개의 댓글</span>
                    </div>
                </div>
            </div>
            <div className={styles.boxBody} dangerouslySetInnerHTML={{__html: body}}/>
        </div>
    );
};

export default ReviewDetail;