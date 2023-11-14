import {Link} from "react-router-dom";

const BoardMain = () => {
    return (
        <div>
            <h1>궁금한 점을 질문하면, 의사에게 무료로 답변 받을 수 있어요!</h1>
            <Link to="/boards/edit" state={{ title: "", body: "" }}>게시글 작성하기</Link>
        </div>
    );
};

export default BoardMain;