import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {readBoardList} from "../../modules/board";
import BoardList from "../../components/board/BoardList";

const BoardListContainer = () => {
    const dispatch = useDispatch();
    const {board, boardError, loading} = useSelector(({board, loading}) => ({
        board: board.board,
        boardError: board.boardError,
        loading: loading['board/READ_BOARD_LIST'],
    }));

    useEffect(() => {
        dispatch(readBoardList());
    }, [dispatch]);

    return (
        <>
            {!loading && board && <BoardList board={board}/>}
            {!loading && boardError && <BoardList boardError={boardError}/>}
        </>
    );
};

export default BoardListContainer;