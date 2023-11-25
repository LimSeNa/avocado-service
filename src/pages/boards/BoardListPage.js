import BoardListContainer from "../../containers/boards/BoardListContainer";
import Banner from "../../components/common/Banner";
import BoardIocn from "../../assets/board-icon.png";

const BoardListPage = () => {
    return (
        <>
            <Banner type={'질문'}
                    title={'궁금한 점을 작성하면, 의료진에게 답변 받을 수 있어요!'}
                    icon={BoardIocn}
            />
            <BoardListContainer/>
        </>
    );
};

export default BoardListPage;