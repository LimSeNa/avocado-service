import styled from "styled-components";
import EditorButtonContainer from "../../containers/board/EditorButtonContainer";
import EditorContainer from "../../containers/board/EditorContainer";

const Main = styled.div`
  padding-top: 150px;
  text-align: center;
  color: black;
`

const BoardWritePage = () => {
    return (
        <Main>
            <EditorContainer/>
            <EditorButtonContainer/>
        </Main>
    );
};

export default BoardWritePage;