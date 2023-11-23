import styles from "./reply.module.css";
import {IoSendSharp} from "react-icons/io5";

const Reply = ({reply, handleChange, handleSend}) => {
    return (
        <div className={styles.boxWriteReply}>
            <input className={styles.inputReply}
                   placeholder='댓글을 달아 작성자의 궁금증을 해결해 주세요!'
                   value={reply}
                   onChange={handleChange}
            />
            <button className={styles.buttonReply} onClick={handleSend}>
                <IoSendSharp className={styles.iconSend}/>
            </button>
        </div>
    );
};

export default Reply;