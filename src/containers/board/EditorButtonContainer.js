import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {boardPost} from "../../modules/board";
import EditorButton from "../../components/board/EditorButton";

const EditorButtonContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {title, body, post, postError} = useSelector(({board}) => ({
        title: board.title,
        body: board.body,
        post: board.post,
        postError: board.postError,
    }));

    const onPublish = () => {
        dispatch(
            boardPost({
                title,
                body,
            }),
        );
    };

    useEffect(() => {
        if(post) {
            navigate(`/`);
        }
        if(postError) {
            console.log(postError);
        }
    }, [navigate, post, postError]);

    return <EditorButton onPublish={onPublish}/>
};

export default EditorButtonContainer;