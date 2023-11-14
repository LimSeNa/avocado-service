import BoardItem from "../../components/board/BoardItem";
import {useDispatch, useSelector} from "react-redux";
import {changeField} from "../../modules/board";

const BoardItemContainer = () => {
    const dispatch = useDispatch(); // 액션 발생
    const {title, body} = useSelector(state => state.boardEdit);

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                key: name,
                value
            })
        );
    };

    return (
        <BoardItem
            title={title}
            body={body}
            onChange={onChange}
        />
    );
};

export default BoardItemContainer;