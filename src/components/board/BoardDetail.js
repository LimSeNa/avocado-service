import {IoPersonCircleOutline} from "react-icons/io5";
import styles from "./board-detail.module.css";
import {FaRegComments} from "react-icons/fa";

const BoardDetail = ({board, boardError}) => {
    if (boardError) return <div>게시글 상세 조회 실패</div>

    const {title, body, dept, writer, createAt, boardReplyList} = board.data;

    return (
        <div className={styles.boxBoardDetail}>
            <div className={styles.boxSubInfo}>
                <div className={styles.deptTag}>{dept}</div>
                <h1 className={styles.boardTitle}>{title}</h1>
                <div className={styles.boxSubInfo2}>
                    <div className={styles.writerIcon}><IoPersonCircleOutline/></div>
                    <div className={styles.boxWriteInfo}>
                        <span className={styles.boardWriter}>{writer}</span>
                        <span className={styles.boardWriteTime}>{createAt}</span>
                    </div>
                    <div className={styles.boxReplyInfo}>
                        <span className={styles.replyIcon}><FaRegComments/></span>
                        <span>{boardReplyList.length}개의 댓글</span>
                    </div>
                </div>
            </div>
            <div className={styles.boxBoardBody} dangerouslySetInnerHTML={{__html: body}}/>
        </div>
    );
};

export default BoardDetail;