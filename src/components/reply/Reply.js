import {LuSend} from "react-icons/lu";

const Reply = ({reply, handleChange, handleSend}) => {
    return (
        <div>
            <input placeholder='댓글을 달아 작성자의 궁금증을 해결해 주세요!'
                   value={reply}
                   onChange={handleChange}
            />
            <button onClick={handleSend}>
                <LuSend />
            </button>
        </div>
    );
};

export default Reply;