import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {writeBoard} from "../../modules/board";
import BoardEditorButton from "../../components/board/BoardEditorButton";

const BoardEditorButtonContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {memberId, title, body, dept, write, writeError} = useSelector(({board}) => ({
        memberId: board.memberId,
        title: board.title,
        body: board.body,
        dept: board.dept,
        write: board.write,
        writeError: board.writeError,
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
        if (write) navigate('/boards');
        if (writeError) alert('게시글 작성 실패!');
    }, [write, writeError, navigate]);

    return (
        <BoardEditorButton handleSubmit={handleSubmit}/>
    );
};

export default BoardEditorButtonContainer;