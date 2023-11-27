import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {readBoardList} from "../../modules/boards";
import BoardList from "../../components/boards/BoardList";
import {useNavigate} from "react-router-dom";

const BoardListContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {boards, boardsError, loading} = useSelector(({boards, loading}) => ({
        boards: boards.boards,
        boardsError: boards.boardsError,
        loading: loading['boards/READ_BOARD_LIST'],
    }));

    const handleNavigate = (id) => {
        navigate(`/boards/${id}/details`);
    };

    useEffect(() => {
        dispatch(readBoardList({pageNum: 0}));
    }, [dispatch]);

    return (
        <>
            {!loading && boards && <BoardList boards={boards} handleNavigate={handleNavigate}/>}
            {!loading && boardsError && <BoardList boardsError={boardsError}/>}
        </>
    );
};

export default BoardListContainer;