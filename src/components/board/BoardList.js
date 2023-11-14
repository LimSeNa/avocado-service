import {useSelector} from "react-redux";

const BoardList = () => {
    const boardItems = useSelector(state => state.boardList.boardItems);

    return (
        <div>
            {boardItems.map(boardItem => (
                <div key={boardItem.id}>
                        제목: {boardItem.title} | 내용: {boardItem.body}
                </div>
            ))}
        </div>
    );
};

export default BoardList;