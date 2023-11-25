import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {initialize, writeBoard} from "../../modules/board";
import EditorButton from "../../components/write/EditorButton";

const BoardEditorButtonContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {memberId, title, body, dept, board, boardError, loading} = useSelector(({board, loading}) => ({
        memberId: board.memberId,
        title: board.title,
        body: board.body,
        dept: board.dept,
        board: board.board,
        boardError: board.boardError,
        loading: loading['board/WRITE_BOARD'],
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
        if (!loading && board) {
            navigate('/boards');
            dispatch(initialize());
        }

        if (!loading && boardError) {
            alert('게시글 등록 실패!');
            console.log(boardError);
        }
    }, [loading]);

    return (
        <EditorButton type={'board'}
                      handleSubmit={handleSubmit}
        />
    );
};

export default BoardEditorButtonContainer;