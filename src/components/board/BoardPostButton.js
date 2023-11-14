import {batch, useDispatch, useSelector} from "react-redux";
import {boardPost} from "../../modules/board";
import {insert} from "../../modules/boardList";
import {useNavigate} from "react-router-dom";

const BoardPostButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {title, body} = useSelector(state => state.boardEdit);
    const {title, body} = useSelector(({boardEdit}) => ({
        title: boardEdit.title,
        body: boardEdit.body,
    }));
    const boardItems = useSelector(state => state.boardList.boardItems);

    const onPublish = e => {
        e.preventDefault();
        batch(() => {
            dispatch(boardPost({
                title,
                body
            }));
            dispatch(insert({
                id: boardItems.length + 1,
                title,
                body
            }));
        });
        navigate("/boards");
    };

    return (
        <div>
            <button onClick={onPublish}>게시글 등록</button>
        </div>
    );
};

export default BoardPostButton;