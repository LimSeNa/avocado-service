import styled from "styled-components";
import Button from "../common/Button";

const ReviewButtonBlock = styled.div`

`;

const StyledButton = styled(Button)`

`;

const ReviewButton = ({onPublish}) => {
    return (
        <ReviewButtonBlock>
            <StyledButton onClick={onPublish}>리뷰 등록</StyledButton>
        </ReviewButtonBlock>
    );
};

export default ReviewButton;