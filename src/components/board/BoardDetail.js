import {IoPersonCircleOutline} from "react-icons/io5";

const BoardDetail = ({board, boardError}) => {
    if (boardError) return <div>게시글 상세 조회 실패</div>

    const {title, body, dept, writer, createAt} = board.data;

    return (
        <div>
            <div>
                <div>{dept}</div>
                <div>{title}</div>
                <div>
                    <div><IoPersonCircleOutline/></div>
                    <div>
                        <div>{writer}</div>
                        <div>{createAt}</div>
                    </div>
                </div>
            </div>
            <div>
                {body}
            </div>
        </div>
    );
};

export default BoardDetail;