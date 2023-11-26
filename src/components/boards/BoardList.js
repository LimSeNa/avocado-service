import styles from "./board-list.module.css";

const BoardItem = ({boardItem, handleNavigate}) => {
    const {id, title, body, dept, createAt} = boardItem;

    return (
        <div className={styles.boxBoardItem} onClick={() => handleNavigate(id)}>
            <h1 className={styles.boardTitle}>{title}</h1>
            <p className={styles.boardBody}>{body}</p>
            <div className={styles.boxSubInfo}>
                <span className={styles.boardTime}>
                    {new Date(createAt).toDateString().replace(/\s/g, '. ')}
                </span>
                <span className={styles.deptTag}>
                    {dept}
                </span>
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