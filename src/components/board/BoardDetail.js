import {IoPersonCircleOutline} from "react-icons/io5";
import styles from "./detail.module.css";
import {FaRegComments} from "react-icons/fa";

const BoardDetail = ({board, boardError}) => {
    if (boardError) return <div>게시글 상세 조회 실패</div>

    const {title, body, dept, writer, createAt, boardReplyList} = board.data;

    return (
        <div className={styles.boxDetail}>
            <div className={styles.boxInfo}>
                <div className={styles.boxTarget}>
                    <div className={styles.tag}>{dept}</div>
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
                        <span>{boardReplyList.length}개의 댓글</span>
                    </div>
                </div>
            </div>
            <div className={styles.boxBody} dangerouslySetInnerHTML={{__html: body}}/>
        </div>
    );
};

export default BoardDetail;