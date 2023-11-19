import BoardDetail from "../../components/board/BoardDetail";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {readBoardDetail} from "../../modules/board";

const BoardDetailContainer = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {board, boardError, loading} = useSelector(({board, loading}) => ({
        board: board.board,
        boardError: board.boardError,
        loading: loading['board/READ_BOARD_DETAIL'],
    }));

    useEffect(() => {
        dispatch(readBoardDetail(id));
    }, [dispatch, id]);

    return (
        <>
            {!loading && board && <BoardDetail board={board}/>}
            {!loading && boardError && <BoardDetail boardError={boardError}/>}
        </>
    );
};

export default BoardDetailContainer;