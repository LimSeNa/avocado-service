import {AiOutlineClose} from "react-icons/ai";
import styles from "./searchModal.module.css";
import {FaHospital} from "react-icons/fa";

const SearchModal = ({onClick, message, handleInitialize}) => {
    return (
        <div className={styles.searchModalBox}>
            <div className={styles.searchModalView}>
                <button className={styles.searchModalClose} onClick={() => {onClick(); handleInitialize();}}>
                    <AiOutlineClose/>
                </button>
                <div className={styles.searchModalContent}>
                    <div className={styles.searchModalIconBox}><FaHospital className={styles.searchModalIcon}/></div>
                    <div className={styles.searchModalText}>
                        <p className={styles.searchModalMessage}>{message}</p>
                        {message === '질문 게시판을 활용해 보세요.' ? null : <p className={styles.searchModalP}>를 추천합니다.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
