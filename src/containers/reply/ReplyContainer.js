import Reply from "../../components/reply/Reply";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize, readReplyDesc, writeReply} from "../../modules/reply";
import {useEffect, useState} from "react";

const ReplyContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {staffId, boardId, reply, loading} = useSelector(({reply, loading}) => ({
        staffId: reply.staffId,
        boardId: reply.boardId,
        reply: reply.reply,
        loading: loading['reply/WRITE_REPLY'],
    }));
    const staff = JSON.parse(localStorage.getItem('staff'));
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = e => {
        dispatch(changeField({
                name: 'reply',
                value: e.target.value,
            }),
        );
    };

    const handleSend = () => {
        if (staff) {
            dispatch(writeReply({
                    staffId,
                    boardId,
                    reply,
                }),
            );
        } else if (!staff) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        dispatch(initialize());
        dispatch(changeField({
                name: 'boardId',
                value: id
            }),
        );

        if (!loading) {
            dispatch(readReplyDesc(boardId));
        }
    }, [dispatch, id, boardId, loading]);

    return (
        <Reply reply={reply}
               handleChange={handleChange}
               handleSend={handleSend}
               isOpen={isOpen}
        />
    );
};

export default ReplyContainer;