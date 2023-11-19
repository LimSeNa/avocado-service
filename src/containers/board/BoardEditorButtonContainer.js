import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {writeBoard} from "../../modules/board";
import BoardEditorButton from "../../components/board/BoardEditorButton";

const BoardEditorButtonContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {memberId, title, body, dept, board, boardError} = useSelector(({board}) => ({
        memberId: board.memberId,
        title: board.title,
        body: board.body,
        dept: board.dept,
        board: board.board,
        boardError: board.boardError,
    }));

    const handleSubmit = () => {
        dispatch(writeBoard({
                memberId,
                title,
                body,
                dept,
            }),
        );
    };

    useEffect(() => {
        if (board) navigate('/boards');
        if (boardError) alert('게시글 작성 실패!');
    }, [board, boardError, navigate]);

    return (
        <BoardEditorButton handleSubmit={handleSubmit}/>
    );
};

export default BoardEditorButtonContainer;