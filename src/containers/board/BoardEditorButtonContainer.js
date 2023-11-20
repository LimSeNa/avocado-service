import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {initialize, writeBoard} from "../../modules/board";
import BoardEditorButton from "../../components/board/BoardEditorButton";

const BoardEditorButtonContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {memberId, title, body, dept} = useSelector(({board}) => ({
        memberId: board.memberId,
        title: board.title,
        body: board.body,
        dept: board.dept,
    }));

    const handleSubmit = () => {
        dispatch(writeBoard({
                memberId,
                title,
                body,
                dept,
            }),
        );

        navigate('/boards');
    };

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return (
        <BoardEditorButton handleSubmit={handleSubmit}/>
    );
};

export default BoardEditorButtonContainer;