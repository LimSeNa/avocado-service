import {Link} from "react-router-dom";
import styles from "./board-list.module.css";
import BoardIcon from "../../assets/board-icon.png"
import {IoArrowForwardSharp} from "react-icons/io5";

const BoardItem = ({boardItem}) => {
    const {title, body, dept, createAt} = boardItem;

    return (
        <div className={styles.boxBoardItem}>
            <h1 className={styles.boardTitle}>{title}</h1>
            <p className={styles.boardBody}>{body}</p>
            <div className={styles.boxSubInfo}>
                <span className={styles.boardTime}>{new Date(createAt).toDateString().replace(/\s/g, '. ')}</span>
                <span className={styles.deptTag}>{dept}</span>
            </div>
        </div>
    );
};


const BoardList = ({board, boardError}) => {
    if (boardError) return <div>게시글 상세 조회 실패</div>

    return (
        <div>
            <div className={styles.boardBanner}>
                <div className={styles.boxExplain}>
                    <h3 className={styles.subExplain}>Avocado의 주요 기능</h3>
                    <h1 className={styles.explain}>궁금한 점을 작성하면, 의료진에게 답변 받을 수 있어요!</h1>
                    <Link className={styles.linkBtn} to='/boards/write'>
                        질문 작성하러 가기&nbsp;
                        <IoArrowForwardSharp />
                    </Link>
                </div>
                <img className={styles.boardIcon} src={BoardIcon} alt='board-icon'/>
            </div>
            <div className={styles.boxBoardList}>
                {board && board.content && <>
                    {board.content.map(boardItem =>
                        <BoardItem boardItem={boardItem}/>
                    )}
                </>}
            </div>
        </div>
    );
};

export default BoardList;