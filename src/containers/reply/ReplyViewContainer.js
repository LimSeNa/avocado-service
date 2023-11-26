import ReplyView from "../../components/reply/ReplyView";
import {useDispatch, useSelector} from "react-redux";
import {readReplyAsc, readReplyDesc, readReviewReplyAsc, readReviewReplyDesc} from "../../modules/reply";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const ReplyViewContainer = ({type}) => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {comment, commentError, loadingDesc, loadingReviewDesc} = useSelector(({reply, loading}) => ({
        comment: reply.comment,
        commentError: reply.commentError,
        loadingDesc: loading['reply/READ_REPLY_DESC'],
        loadingReviewDesc: loading['reply/READ_REVIEW__REPLY_DESC'],
    }));

    const handleDesc = () => {
        if (type === 'review') {
            dispatch(readReviewReplyDesc(id));
        }

        if (type !== 'review') {
            dispatch(readReplyDesc(id));
        }
    };

    const handleAsc = () => {
        if (type === 'review') {
            dispatch(readReviewReplyAsc(id));
        }

        if (type !== 'review') {
            dispatch(readReplyAsc(id));
        }
    };

    // 맨 처음 한 번만
    useEffect(() => {
        if (type === 'review') {
            dispatch(readReviewReplyDesc(id));
        }

        if (type !== 'review') {
            dispatch(readReplyDesc(id));
        }
    }, []);

    return (
        <>
            {type !== 'review' && !loadingDesc && comment && <ReplyView comment={comment}
                                                                        handleDesc={handleDesc}
                                                                        handleAsc={handleAsc}
                                                                        type={type}
            />}
            {type !== 'review' && !loadingDesc && commentError && <ReplyView commentError={commentError}/>}
            {type === 'review' && !loadingReviewDesc && comment && <ReplyView comment={comment}
                                                                              handleDesc={handleDesc}
                                                                              handleAsc={handleAsc}
                                                                              type={type}
            />}
            {type === 'review' && !loadingReviewDesc && commentError && <ReplyView commentError={commentError}/>}
        </>
    );
};

export default ReplyViewContainer;