import ReplyView from "../../components/reply/ReplyView";
import {useDispatch, useSelector} from "react-redux";
import {readReplyAsc, readReplyDesc} from "../../modules/reply";
import {useEffect} from "react";
import {useParams} from "react-router-dom";

const ReplyViewContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {comment, commentError, loading} = useSelector(({reply, loading}) => ({
        comment: reply.comment,
        commentError: reply.commentError,
        loading: loading['reply/READ_REPLY_DESC'],
    }));

    const handleDesc = () => {
        dispatch(readReplyDesc(id));
    };

    const handleAsc = () => {
        dispatch(readReplyAsc(id));
    };

    useEffect(() => {
        dispatch(readReplyDesc(id));
    }, [dispatch, id]);

    return (
        <>
            {!loading && comment && <ReplyView comment={comment}
                                                    handleDesc={handleDesc}
                                                    handleAsc={handleAsc}
            />}
            {!loading && commentError && <ReplyView commentError={commentError}/>}
        </>
    );
};

export default ReplyViewContainer;