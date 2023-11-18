import styles from "./board-editor.module.css";

const BoardEditorButton = ({handleSubmit}) => {
    return (
        <button className={styles.btnWriteBoard} onClick={handleSubmit}>
            게시글 등록
        </button>
    );
};

export default BoardEditorButton;