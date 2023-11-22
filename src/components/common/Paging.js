import styles from "./paging.module.css";

const Paging = ({handlePlus}) => {
    return (
        <div className={styles.boxPaging}>
            <button className={styles.buttonPaging} onClick={handlePlus}>
                더보기
            </button>
        </div>
    );
};

export default Paging;