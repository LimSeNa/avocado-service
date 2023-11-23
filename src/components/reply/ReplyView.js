import ReplyDropDown from "./ReplyDropDown";

const ReplyItem = ({replyItem}) => {
    const {reply, replyWriter} = replyItem;

    return (
        <div>
            <div>{reply}</div>
            <div>{replyWriter}</div>
        </div>
    );
};

const ReplyView = ({comment, commentError, handleDesc, handleAsc}) => {
    if (commentError) return <div>댓글 조회 실패</div>

    return (
        <div>
            <ReplyDropDown handleDesc={handleDesc} handleAsc={handleAsc}/>
            {comment && comment.data ?
                <div>
                    {comment.data.map(replyItem =>
                        <ReplyItem key={crypto.randomUUID()} replyItem={replyItem}/>
                    )}
                </div>
                : <div>아직 등록된 댓글이 없어요. 가장 먼저 댓글을 달아보세요!</div>
            }
        </div>
    );
};

export default ReplyView;