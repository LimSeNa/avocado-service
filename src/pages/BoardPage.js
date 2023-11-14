import styled from "styled-components";
import BoardMain from "../components/board/BoardMain";
// import BoardListContainer from "../containers/board/BoardListContainer";

const Main = styled.div`
  padding-top: 150px;
  text-align: center;
  color: black;
`

const BoardPage = () => {
    return (
        <>
            <Main>
                <BoardMain/>
                {/*<BoardListContainer/>*/}
            </Main>
        </>
    );
};

export default BoardPage;