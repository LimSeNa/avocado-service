import BoardDetailContainer from "../../containers/board/BoardDetailContainer";
import ReplyContainer from "../../containers/reply/ReplyContainer";
import ReplyViewContainer from "../../containers/reply/ReplyViewContainer";

const BoardDetailPage = () => {
    return (
        <>
            <BoardDetailContainer/>
            <ReplyContainer/>
            <ReplyViewContainer/>
        </>
    );
};

export default BoardDetailPage;