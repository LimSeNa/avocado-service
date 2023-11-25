import styles from "../board/board-editor.module.css";

const textMap = {
    review: '리뷰',
    board: '게시글'
};

const EditorButton = ({type, handleSubmit}) => {
    return (
        <button className={styles.btnWriteBoard} onClick={handleSubmit}>
            {textMap[type]} 등록
        </button>
    );
};

export default EditorButton;