import styled from "styled-components";
import Button from "../common/Button";

const WriteButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;

  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
`;

const WriteButton = ({onPublish}) => {
    return (
        <WriteButtonBlock>
            <StyledButton onClick={onPublish}>등록하기</StyledButton>
        </WriteButtonBlock>
    );
};

export default WriteButton;