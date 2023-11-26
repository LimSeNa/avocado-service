import styles from "./board-list.module.css";
import {PiPencilSimpleLine} from "react-icons/pi";
import {SlCalender} from "react-icons/sl";

const BoardItem = ({boardItem, handleNavigate}) => {
    const {id, title, body, dept, writer, createAt} = boardItem;

    return (
        <div className={styles.boxBoardItem} onClick={() => handleNavigate(id)}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.body}>{body}</div>
            <div className={styles.boxInfo}>
                <div className={styles.boxSubInfo}>
                    <div className={styles.infoItem}>
                        <PiPencilSimpleLine className={styles.icon}/>
                        <div>작성자 : {writer}</div>
                    </div>
                    <div className={styles.infoItem}>
                        <SlCalender className={styles.icon}/>
                        <div>작성 날짜 : {new Date(createAt).toDateString().replace(/\s/g, '. ')}</div>
                    </div>
                </div>
                <div className={styles.tagDept}>
                    {dept}
                </div>
            </div>
        </div>
    );
};


const BoardList = ({boards, boardsError, handleNavigate}) => {
    if (boardsError) return <div>게시글 목록 조회 실패</div>

    return (
        <div className={styles.boxBoardList}>
            {boards && boards.content && <>
                {boards.content.map(boardItem =>
                    <BoardItem key={boardItem.id}
                               boardItem={boardItem}
                               handleNavigate={handleNavigate}
                    />
                )}
            </>}
        </div>
    );
};

export default BoardList;