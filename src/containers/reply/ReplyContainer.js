import Reply from "../../components/reply/Reply";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize, writeReply} from "../../modules/reply";
import {useEffect} from "react";

const ReplyContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {staffId, boardId, reply} = useSelector(({reply}) => ({
        staffId: reply.staffId,
        boardId: reply.boardId,
        reply: reply.reply,
    }));

    const handleChange = e => {
        dispatch(changeField({
                name: 'reply',
                value: e.target.value,
            }),
        );
    };

    const handleSend = () => {
        dispatch(writeReply({
                staffId,
                boardId,
                reply,
            }),
        );
    };

    useEffect(() => {
        dispatch(initialize());
        dispatch(changeField({
                name: 'boardId',
                value: id
            }),
        );
    }, [dispatch, id]);

    return (
        <Reply reply={reply}
               handleChange={handleChange}
               handleSend={handleSend}
        />
    );
};

export default ReplyContainer;