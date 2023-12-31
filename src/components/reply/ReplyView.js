import ReplyDropDown from "./ReplyDropDown";
import styles from "./reply-view.module.css";
import {FaUserDoctor} from "react-icons/fa6";
import {v4 as uuid4} from "uuid";
import {FaUser} from "react-icons/fa";

const ReplyItem = ({replyItem, type}) => {
    const {reply, replyWriter} = replyItem;

    return (
        <div className={styles.boxItem}>
            <div className={styles.boxIcon}>
                {type === 'review' ?
                    <FaUser className={styles.iconDoctor}/>
                    : <FaUserDoctor className={styles.iconDoctor}/>}
            </div>
            <div className={styles.boxInfo}>
                <div className={styles.writer}>{replyWriter}</div>
                <div className={styles.reply}>{reply}</div>
            </div>
        </div>
    );
};

const ReplyView = ({comment, commentError, handleDesc, handleAsc, type}) => {
    if (commentError) return <div>댓글 조회 실패</div>

    return (
        <div className={styles.boxView}>
            <ReplyDropDown handleDesc={handleDesc} handleAsc={handleAsc}/>
            {comment && comment.data && comment.data.length !==0 ?
                <div className={styles.boxReply}>
                    {comment.data.map(replyItem =>
                        <ReplyItem key={uuid4()} replyItem={replyItem} type={type}/>
                    )}
                </div>
                : <div className={styles.boxNoReply}>아직 등록된 댓글이 없어요. 가장 먼저 댓글을 달아보세요!</div>
            }
        </div>
    );
};

export default ReplyView;