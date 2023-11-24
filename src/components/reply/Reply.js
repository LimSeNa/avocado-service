import styles from "./reply.module.css";
import {IoSendSharp} from "react-icons/io5";
import {MdErrorOutline} from "react-icons/md";

const Reply = ({reply, handleChange, handleSend, isOpen}) => {
    return (
        <div className={styles.boxWriteReply}>
            <input className={styles.inputReply}
                   placeholder='댓글을 달아 작성자의 궁금증을 해결해 주세요!'
                   value={reply}
                   onChange={handleChange}
            />
            <div className={styles.boxButton}>
                <button className={styles.buttonReply} onClick={handleSend}>
                    <IoSendSharp className={styles.iconSend}/>
                </button>
                {isOpen ?
                    <div className={styles.modalSend}>
                        <div className={styles.ballon}>
                            <MdErrorOutline className={styles.iconWarning}/>
                            <div>의료진 회원만 댓글을 등록할 수 있어요.</div>
                        </div>
                    </div>
                    : null
                }
            </div>
        </div>
    );
};

export default Reply;