import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeField, initialize} from "../../modules/board";
import BoardEditor from "../../components/board/BoardEditor";

const BoardEditorContainer = () => {
    const dispatch = useDispatch();
    const {title, body, dept} = useSelector(({board}) => ({
        title: board.title,
        body: board.body,
        dept: board.dept,
    }));

    const handleChange = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return (
        <BoardEditor title={title}
                     body={body}
                     dept={dept}
                     handleChange={handleChange}
        />
    );
};

export default BoardEditorContainer;