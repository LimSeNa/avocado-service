import Reply from "../../components/reply/Reply";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize, readReplyDesc, readReviewReplyDesc, writeReply, writeReviewReply} from "../../modules/reply";
import {useEffect, useState} from "react";
import {readReviewDetail} from "../../modules/review";

const ReplyContainer = ({type}) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {staffId, memberId, boardId, reviewId, reply, comment, loadingWrite, loadingReview} = useSelector(({reply, loading}) => ({
        staffId: reply.staffId,
        memberId: reply.memberId,
        boardId: reply.boardId,
        reviewId: reply.reviewId,
        reply: reply.reply,
        comment: reply.comment,
        loadingWrite: loading['reply/WRITE_REPLY'],
        loadingReview: loading['reply/WRITE_REVIEW_REPLY'],
    }));
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = e => {
        dispatch(changeField({
                name: 'reply',
                value: e.target.value,
            }),
        );
    };

    const handleSend = () => {
        if (type === 'review') {
            if (memberId) {
                dispatch(writeReviewReply({
                        memberId,
                        reviewId,
                        reply,
                    }),
                );
            } else if (!memberId) {
                setIsOpen(!isOpen);
            }
        }

        if (type !== 'review') {
            if (staffId) {
                dispatch(writeReply({
                        staffId,
                        boardId,
                        reply,
                    }),
                );
            } else if (!staffId) {
                setIsOpen(!isOpen);
            }
        }
    };

    // 맨 처음 한 번만
    useEffect(() => {
        dispatch(initialize());

        dispatch(changeField({
                name: 'reviewId',
                value: id
            }),
        );

        dispatch(changeField({
                name: 'boardId',
                value: id
            }),
        );
    }, []);

    // loading이 변경될 때마다
    // 즉, 댓글 등록 요청이 끝난 후마다 실행
    useEffect(() => {
        if (type === 'review' && !loadingReview && comment) {
            dispatch(readReviewReplyDesc(reviewId));
        }

        if (type !== 'review' && !loadingWrite && comment) {
            dispatch(readReplyDesc(boardId));
        }
    }, [loadingReview, loadingWrite]);

    return (
        <Reply reply={reply}
               handleChange={handleChange}
               handleSend={handleSend}
               isOpen={isOpen}
               type={type}
        />
    );
};

export default ReplyContainer;