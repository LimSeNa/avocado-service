import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {changeField, initialize} from "../../modules/board";
import Editor from "../../components/board/Editor";

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ board }) => ({
        title: board.title,
        body: board.body,
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        dispatch(initialize());
    }, [dispatch]);

    return <Editor onChangeField={onChangeField} title={title} body={body}/>
};

export default EditorContainer;